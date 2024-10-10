// /controllers/preferencesController.js
const User = require('../models/user'); // User model ko import karna

// Function to save user preferences
exports.savePreferences = async (req, res) => {
    try {
        const userPreferences = new User(req.body); // User preferences ko new instance mein daalna
        await userPreferences.save(); // Database mein save karna
        res.status(201).json(userPreferences); // Success response
    } catch (error) {
        res.status(400).json({ message: error.message }); // Error response
    }
};

// Function to suggest destinations based on user preferences
function suggestDestinations(userPreferences) {
    const destinations = [
        { name: 'Beach Paradise', vibes: ['relaxation'], budget: 'high' },
        { name: 'Mountain Adventure', vibes: ['adventure'], budget: 'medium' }
    ];

    return destinations.filter(destination =>
        userPreferences.travelVibes.some(vibe => destination.vibes.includes(vibe)) &&
        destination.budget === userPreferences.budget
    );
}

// Endpoint to get suggested destinations
exports.suggestDestinations = (req, res) => {
    const userPreferences = req.body; // User preferences ko request body se lena
    const suggestedDestinations = suggestDestinations(userPreferences); // Suggest destinations
    res.json(suggestedDestinations); // Response bhejna
};
