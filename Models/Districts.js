const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districts = new Schema({
    id: String,
    division_id: String,
    name: String,
    bn_name: String,
    lat: String,
    lng: String,
    website: String,
}, {timestamps: true});

module.exports  = mongoose.model('Districts', districts)
