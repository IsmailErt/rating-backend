// index.js

const express = require('express');

const app = express();

const ratingRoutes = require('./ratingRoutes');

app.use(express.json()); 

app.use('/api/ratings', ratingRoutes); 

const PORT = 3000;

app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
});
