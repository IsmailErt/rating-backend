const sqlite3 = require('sqlite3').verbose();
const path = require('path');

//   open the database file
const db = new sqlite3.Database(path.join(__dirname, 'ratings.db'), (error) => {
  if (error) 
  {
    // Handle the error
    console.error('Failed to connect to the database', error);

  } else 
  
  {
    console.log('Successfully connected to SQLite database');
  }
});

// Create the ratings table 
db.run(`
  
  CREATE TABLE IF NOT EXISTS module_ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    moduleId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
