const { default: mongoose } = require("mongoose");



const connectToDatbase = async () => {
    try{
        mongoose.connect(process.env.KEY_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
        console.log('DB is connected')
    }catch(error) {
        console.error(error)
    }
}

module.exports = connectToDatbase;