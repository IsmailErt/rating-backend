const db = require('../storage/database');

// Create a new rating
function createRating(userID, moduleID, rating, callback) 
{

  const query = `
    
    INSERT INTO module_ratings (userID, moduleID, rating)
    VALUES (?, ?, ?)

  `;

  db.run(query, [userID, moduleID, rating], function (error) {
    
    callback(error, this?.lastID);

  });
}

// Get average rating for a module

function getAverageRating(moduleID, callback) 
{
  const query = `
    SELECT AVG(rating) as averageRating
    FROM module_ratings
    WHERE moduleID = ?
  `;
  db.get(query, [moduleID], (error, row) => 

  {
    callback(error, row);
  });

}

module.exports = {

  createRating,
  getAverageRating
  
};
