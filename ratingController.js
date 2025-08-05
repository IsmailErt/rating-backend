const db = require('./db')  ; // Assuming db is a module that exports a database connection

const addRating = ( req , res ) =>  
    
    {
   
        const { moduleId , rating }   =  req.body   ;

    if (!moduleId  || typeof rating !== 'number') 
       
        {
        return res.status(400).json({ error: 'Missing or incorrect fields' });
        }

    // Validate rating range (0 to 5)
    if (rating < 0 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 0 and 5' });
    }

    const query = `
       
        INSERT INTO module_ratings (moduleId, rating)
        VALUES (?, ?)
    `;

    db.run(query, [moduleId, rating], function (error) 
    {
        if (error) 
       
        {

            return res.status(500).json({ error: 'Database insert failed', details: error.message });
        }

        res.status(201).json({
            message: 'Rating added',
            rating:
            {
                id: this.lastID,
                moduleId,
                rating,
                createdAt: new Date().toISOString()
            }

        });
    });
};

const getAllRatings = (req, res) => 
{
    db.all('SELECT * FROM module_ratings', [], (error, rows) => {
        
        if (error) 
        {
            return res.status(500).json({ error: 'Database fetch failed', details: error.message });
        }
        res.json(rows);
    });
};

const getRatingById = (req, res) => {
    const { id } = req.params;
    
    db.get('SELECT * FROM module_ratings WHERE id = ?', [id], (error, row) => {
        if (error) {
            return res.status(500).json({ error: 'Database fetch failed', details: error.message });
        }
        
        if (!row) {
            return res.status(404).json({ error: 'Rating not found' });
        }
        
        res.json(row);
    });
};

const updateRating = (req, res) => {
    const { id } = req.params;
    const { moduleId, rating } = req.body;
    
    if (!moduleId || typeof rating !== 'number') {
        return res.status(400).json({ error: 'Missing or incorrect fields' });
    }
    
    if (rating < 0 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be between 0 and 5' });
    }
    
    const query = `
        UPDATE module_ratings 
        SET moduleId = ?, rating = ?, createdAt = CURRENT_TIMESTAMP
        WHERE id = ?
    `;
    
    db.run(query, [moduleId, rating, id], function (error) {
        if (error) {
            return res.status(500).json({ error: 'Database update failed', details: error.message });
        }
        
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Rating not found' });
        }
        
        res.json({
            message: 'Rating updated successfully',
            rating: {
                id: parseInt(id),
                moduleId,
                rating,
                createdAt: new Date().toISOString()
            }
        });
    });
};

const deleteRating = (req, res) => {
    const { id } = req.params;
    
    const query = 'DELETE FROM module_ratings WHERE id = ?';
    
    db.run(query, [id], function (error) {
        if (error) {
            return res.status(500).json({ error: 'Database delete failed', details: error.message });
        }
        
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Rating not found' });
        }
        
        res.json({ message: 'Rating deleted successfully' });
    });
};

module.exports = { addRating, getAllRatings, getRatingById, updateRating, deleteRating };
