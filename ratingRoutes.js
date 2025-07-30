const express = require('express');
const router = express.Router();
const { addRating, getAllRatings } = require('./ratingController');

// POST: Add a rating to DB
router.post('/', addRating);

// GET: Get all ratings from DB
router.get('/', getAllRatings);

module.exports = router;
