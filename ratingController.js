const db = require('./db')  ; // Assuming db is a module that exports a database connection

const addRating = ( req , res ) =>  
    
    {
   
        const { moduleId ,  userId ,  rating }   =  req.body   ;

    if (!moduleId  || !userId  || typeof rating !== 'number') 
       
        {
        return res.status(400).json({ error: 'Missing or incorrect fields' });
        }

    const query = `
       
        INSERT INTO module_ratings (moduleId, userId, rating)
        VALUES (?, ?, ?)
    `;

    db.run(query, [moduleId, userId, rating], function (error) 
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
                userId,
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

module.exports = { addRating, getAllRatings };
