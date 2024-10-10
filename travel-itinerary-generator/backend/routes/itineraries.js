const express = require('express');
const Itinerary = require('../models/Itinerary');

const router = express.Router();

// Create Itinerary
router.post('/', async (req, res) => {
    const { userId, destination, activities } = req.body;
    const newItinerary = new Itinerary({ userId, destination, activities });

    try {
        await newItinerary.save();
        res.status(201).send('Itinerary created successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get Itineraries for a User
router.get('/:userId', async (req, res) => {
    const itineraries = await Itinerary.find({ userId: req.params.userId });
    res.json(itineraries);
});

module.exports = router;
