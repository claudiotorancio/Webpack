
require('dotenv').config();

const express = require('express')
const morgan = require('morgan')

const path = require('path')
const cors = require('cors')

//initializacion
const app = express()

require('./backend/database.js')

//Settings
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(morgan('dev'));



app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(cors())


app.use('/api/books', require('./api/books.js'))


 
//Static files
app.use(express.static(path.join(__dirname, 'backend', 'public')))


//Server Starter
app.listen(PORT, () => {
    console.log(`escuchando en el puerto: ${PORT}`)

})
