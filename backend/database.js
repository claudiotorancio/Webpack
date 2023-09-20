require('dotenv').config();

const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI)
const connectToDatbase = async () => {
    try{
          mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
        console.log('DB is connected')
    }catch(error) {
        console.error(error)
    }
}

module.exports = connectToDatbase;