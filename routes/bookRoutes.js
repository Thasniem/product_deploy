const express = require('express');
const bookController = require('../controller/bookController');
const router = express.Router();

// GET all books
router.get('/books', bookController.getAllBooks);

// GET single book by ID
router.get('/books/:bookId', bookController.getSingleBook);

// ADD new book
router.post('/books', bookController.addNewBook);

// UPDATE book details
router.put('/books/:bookId', bookController.updateBook);

// DELETE book
router.delete('/books/:bookId', bookController.deleteBook);

module.exports = router;
