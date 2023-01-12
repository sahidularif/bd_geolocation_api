// MongoDB Configuration
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const DB2 = 'mongodb://localhost:27017/geolocation'
const DB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.or4h7.mongodb.net/geolocation?retryWrites=true&w=majority`
module.exports = () => {
    mongoose.connect(DB2, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    },)
    .then(() => console.log('Connected to Mongodb database'))
    .catch(error => console.log('Database could not be connected'))
}

