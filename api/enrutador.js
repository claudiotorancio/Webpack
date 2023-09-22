const router = require('express').Router();
const path = require('path')

const {tomar} = require('../backend/routes/books.js')
const {postear} = require('../backend/routes/books.js')
const {borrar} = require('../backend/routes/books.js')



router.get('/api/tomar', tomar)
router.post('/api/postear', postear)
router.delete('/api/borrar', borrar)


 

module.exports = router
