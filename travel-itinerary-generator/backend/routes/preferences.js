const express = require('express');
const router = express.Router();
const PreferencesController = require('../controllers/preferencesController');

router.post('/', PreferencesController.savePreferences);

module.exports = router;
