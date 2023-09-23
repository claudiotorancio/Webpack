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
    const{title, author, isbn } = req.body;
    
    const newBook = new Book ({title, author, isbn});
    await newBook.save();

    res.json({message:'Book saved'})
});

router.delete('/api/books/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    
    res.json({message:'Book deleted'})
});


module.exports = router;