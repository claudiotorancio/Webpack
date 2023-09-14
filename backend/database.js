const { default: mongoose } = require("mongoose");
const KEY_URI = process.env.KEY_URI


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