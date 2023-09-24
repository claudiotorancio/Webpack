const { Router } = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');

const Book = require('../models/Book.js');

// Ruta para obtener todos los libros (GET /api/books)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Ruta para agregar un nuevo libro (POST /api/books)
router.post('/', async (req, res) => {
    try {
        const { title, author, isbn, imagePath } = req.body;
        const newBook = new Book({ title, author, isbn, imagePath });
        await newBook.save();

        res.json({ message: 'Book saved' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Ruta para eliminar un libro por su ID (DELETE /api/books/:id)
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        unlink(path.resolve('./backend/public' + book.imagePath));
        res.json({ message: 'Book deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
