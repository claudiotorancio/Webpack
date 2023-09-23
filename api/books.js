//routes/books.js

const {Router} = require('express')
const router = Router();
const {unlink} = require('fs-extra')
const path = require('path')

const Book = require('../backend/models/Book.js')

router.get('/', async (req, res) => {
    const books = await Book.find()
    res.json(books)
});

router.post('/', async (req, res) => {
    try {
        const { title, author, isbn } = req.body;

        // Verifica si se proporciona un archivo en la solicitud.
        if (!req.file) {
            return res.status(400).json({ message: 'No se proporcionó un archivo de imagen.' });
        }

        const imagePath = '/uploads/' + req.file.filename;
        const newBook = new Book({ title, author, isbn, imagePath });
        await newBook.save();

        res.json({ message: 'Libro guardado exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al guardar el libro.' });
    }
});


router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    unlink(path.resolve('./backend/public' + book.imagePath))
    res.json({message:'Book deleted'})
});


module.exports = router;