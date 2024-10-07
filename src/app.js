const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Init middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoute')); // Auth-related routes
app.use('/api/location', require('./routes/locationRoute')); // Location data route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
