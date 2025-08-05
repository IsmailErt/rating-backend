const db = require('./db');

function createRating(moduleID, rating, callback) 
{

  const query = `
    
    INSERT INTO module_ratings (moduleID, rating)
    VALUES (?, ?)

  `;

  db.run(query, [moduleID, rating], function (error) {
    
    callback(error, this?.lastID);

  });
}


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
