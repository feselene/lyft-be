// src/routes/locationRoute.js

const express = require('express');
const { getLocationData } = require('../controllers/locationController'); // Updated import
const router = express.Router();

router.get('/location', getLocationData);

module.exports = router;
