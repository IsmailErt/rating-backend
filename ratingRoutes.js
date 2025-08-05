const express = require('express');
const router = express.Router();
const { addRating, getAllRatings, getRatingById, updateRating, deleteRating } = require('./ratingController');

router.post('/', addRating);

router.get('/', getAllRatings);

router.get('/:id', getRatingById);

router.put('/:id', updateRating);

router.delete('/:id', deleteRating);

module.exports = router;
