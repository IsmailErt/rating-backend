// index.js

const express = require('express');
const cors = require('cors');

const app = express();

const ratingRoutes = require('./ratingRoutes');

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); 

app.use('/api/ratings', ratingRoutes); 

const PORT = 3000;

app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
});
