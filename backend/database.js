const mongoose = require("mongoose");



const connectToDatbase = async () => {
    try{
         await mongoose.connect('mongodb://127.0.0.1:27017/javascriptdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
        console.log('DB is connected')
    }catch(error) {
        console.error(error)
    }
}

module.exports = connectToDatbase;