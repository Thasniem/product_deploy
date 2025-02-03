const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    publisher: { type: String, required: true },
    language: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
