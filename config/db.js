const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`).then(() => {
    console.log('Connected to database: success')
}).catch(() => {
    console.log('Connected to database: failded')
})