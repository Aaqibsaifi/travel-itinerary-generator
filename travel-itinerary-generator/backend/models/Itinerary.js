const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    destination: String,
    activities: Array,
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', ItinerarySchema);
