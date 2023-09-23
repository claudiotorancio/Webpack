const { Router } = require('express');
const router = Router();
const multer = require('multer');
const { unlink } = require('fs-extra');
const path = require('path');

const Book = require('../backend/models/Book');

// Configuración de Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
});

// Crear un nuevo libro
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Book({ title, author, isbn, imagePath });
    await newBook.save();
    res.json({ message: 'Libro guardado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar el libro' });
  }
});

// Eliminar un libro por ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) {
      // Eliminar la imagen asociada al libro
      unlink(path.join(__dirname, '../public' + book.imagePath));
      res.json({ message: 'Libro eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
});

module.exports = router;
