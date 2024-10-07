// src/routes/authRoute.js

const express = require('express');
const { signup, login, getLocationData } = require('../controllers/authController');
const router = express.Router();

router.get('/location', getLocationData); // New route for location data
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
