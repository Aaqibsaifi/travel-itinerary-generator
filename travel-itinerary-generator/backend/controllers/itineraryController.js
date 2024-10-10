// /controllers/itineraryController.js
function generateItinerary(destination) {
    const itineraries = {
        'Beach Paradise': {
            morning: ['Beach yoga', 'Breakfast at a seaside café'],
            afternoon: ['Snorkeling', 'Lunch at a beach bar'],
            evening: ['Sunset cruise', 'Dinner at a seafood restaurant']
        },
        'Mountain Adventure': {
            morning: ['Hiking', 'Picnic breakfast'],
            afternoon: ['Rock climbing', 'Visit a local village'],
            evening: ['Campfire dinner', 'Stargazing']
        }
    };

    return itineraries[destination.name]; // Destination ke hisaab se itinerary return karna
}

// Endpoint to generate itinerary based on destination
exports.generateItinerary = (req, res) => {
    const { destination } = req.body; // Request body se destination lena
    const itinerary = generateItinerary(destination); // Itinerary generate karna
    res.json(itinerary); // Response bhejna
};
