const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const divisions = new Schema({
    id: String,
    name: String,
    bn_name: String,
    lat: String,
    lng: String,
}, {timestamps: false});

module.exports  = mongoose.model('Divisions', divisions)
