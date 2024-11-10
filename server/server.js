// Import express for server setup, middleware, API routes and start server on specified port
const express = require('express');
// Gives access to the MongoDB
const mongoose = require('mongoose');
// Imports CORS
const cors = require('cors');

// Initializes express app
const app = express();
// Enables CORS which is used to allow request from other front-ends
// Meaning frontend and backends with different ports can communicate
app.use(cors());
// Tells express app how to automatically parse JSON data by converting it to JS object
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitnessApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define the backend port
const PORT = 5000;
app.listen(PORT, () => {});

// Import the User model
const User = require('./models/User');

// Define the check-in route
app.post('/checkin', async (req, res) => {
    // Extracts username property from data and assigns it to username.
    const { username } = req.body;
    // Checks if there already exists a person with the given name username in the database
    let user = await User.findOne({ username });

    // Generate a "check-in key" every X seconds
    const seconds = 86400; 
    const currentCheckInKey = Math.floor(Date.now() / (seconds * 1000)); 

    // If user is non-existant, add new one to the database
    if (!user) {
        user = new User({
            username,
            checkInCount: 0,
            lastCheckInDate: -1,
            rank: 'Iron',
        });
    }   

    // Makes sure user does not spam checkin
    // Double checkins occur where someone presses checkin right before currentCheckInKey updates and right after it updates
    if (user.lastCheckInDate === currentCheckInKey && user.lastCheckInDate!=-1) {
        await user.save();
        res.json(user);
        return;
    }

    // If valid checkin, then update appropriate values
    user.checkInCount += 1;
    user.lastCheckInDate = currentCheckInKey;

    // Ranks for fitness tracker
    const ranks = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Challenger'];

    // Update the rank based on check-in count
    // If index out of bounds, give user 'Challenger'
    user.rank = ranks[Math.floor(user.checkInCount / 10)] || 'Challenger';

    // Updates user data in the database
    await user.save();
    // Gives app access to the most updated user data
    res.json(user);
});

// Define the route to fetch user data by username
app.get('/user/:username', async (req, res) => {
    const { username } = req.params;

    // Sees if user with given username is in database
    const user = await User.findOne({ username });

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Allows for other files to import and use the express application
module.exports = app;
