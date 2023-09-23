

let config;

if(process.env.NODE_ENV === 'production') {
    config = process.env.MONGODB_URI
} else{
    config = require('./dev.js')
}

module.exports = config;