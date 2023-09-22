


const mongoose = require("mongoose");
const config = require("../config");



          mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))
    