// Done to interact with MongoDB
// Mongoose simplifies working with MongoDB
const mongoose = require('mongoose');

// Defining Schema for users where we structure user data
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  checkInCount: { type: Number, default: 0 },
  lastCheckInDate: { type: Number },
  rank: { type: String, default: 'Iron' },
});

// Creates a model named User based on the Schema
// Export the model based on the Schema allowing other parts of application to interact with 'User' model
module.exports = mongoose.model('User', UserSchema);