const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    username: { type: String, required: true },  // Now 'username' is second
    email: { type: String, required: true, unique: true },
    bookId: [{ type: String, required: true }]
});

module.exports = mongoose.model('User', userSchema);

