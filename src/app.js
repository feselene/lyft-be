const express = require('express'); // Import Express
const connectDB = require('./config/db');
const mongoose = require('mongoose'); // Import Mongoose to interact with MongoDB
const dotenv = require('dotenv'); // Import dotenv to load environment variables
const ExampleModel = require('./models/ExampleModel'); // Import the PhoneNumber model

// Load environment variables from .env file
// dotenv.config(); // This makes sure process.env.MONGO_URI and process.env.PORT are available
require('dotenv').config();

// Initialize the Express application
const app = express();

// Use JSON middleware to parse incoming requests with JSON payloads
app.use(express.json())

// Connect to MongoDB
connectDB();

// Init middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoute')); // Auth-related routes
app.use('/api/location', require('./routes/locationRoute')); // Location data route

// Connect to MongoDB using the MONGODB_URI from .env
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => {
        // Start the server after successful MongoDB connection
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

