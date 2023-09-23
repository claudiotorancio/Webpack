//routes/books.js

const {Router} = require('express')
const router = Router();
const {unlink} = require('fs-extra')
const path = require('path')

const Book = require('../backend/models/Book.js')

router.get('/api/books', async (req, res) => {
    const books = await Book.find()
    res.json(books)
});

router.post('/api/books', async (req, res) => {
    if(!req.file) {
        return res.status(400).json({ message: 'No se adjuntó ningún archivo.' });
    }
    const{title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename
    const newBook = new Book ({title, author, isbn, imagePath});
    await newBook.save();

    res.json({message:'Book saved'})
});

router.delete('/api/books/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    unlink(path.resolve('./backend/public' + book.imagePath))
    res.json({message:'Book deleted'})
});


module.exports = router;