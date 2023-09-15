const { default: mongoose } = require("mongoose");
const config = require("../config");



const connectToDatbase = async () => {
    try{
        mongoose.connect(config.KEY_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
        console.log('DB is connected')
    }catch(error) {
        console.error(error)
    }
}

module.exports = connectToDatbase;