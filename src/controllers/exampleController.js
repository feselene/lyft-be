// src/controllers/exampleController.js

const axios = require('axios');

// Google Maps API key (make sure to secure this in a .env file)
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Function to get real-time location data
exports.getExamples = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    // Request to Google Maps API for real-time location data
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        latlng: `${latitude},${longitude}`,
        key: GOOGLE_MAPS_API_KEY
      }
    });

    if (response.data.status === 'OK') {
      const locationData = response.data.results[0];
      res.json({ location: locationData });
    } else {
      res.status(500).json({ error: 'Failed to retrieve location data' });
    }
  } catch (error) {
    console.error('Error fetching location data:', error.response?.data || error.message);
    res.status(500).json({ error: 'An error occurred while fetching location data' });
  }
};
