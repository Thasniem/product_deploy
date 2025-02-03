const Book = require('../model/book');

// GET all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// GET single book by ID
exports.getSingleBook = async (req, res) => {
    try {
        const book = await Book.findOne({ bookId: req.params.bookId });
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// ADD new book
exports.addNewBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// UPDATE book details
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { bookId: req.params.bookId },
            req.body,
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// DELETE book
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({ bookId: req.params.bookId });
        if (!deletedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.json({ msg: 'Book deleted', deletedBook });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};
