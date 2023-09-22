const router = require('express').Router();
const path = require('path')

const {tomar} = require('./books.js')
const {postear} = require('./books.js')
const {borrar} = require('./books.js')



router.get('/api/tomar', tomar)
router.post('/api/postear', postear)
router.delete('/api/borrar', borrar)


 

module.exports = router
