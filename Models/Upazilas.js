const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upazilas = new Schema({
    id: String,
    district_id: String,
    name: String,
    bn_name: String,
    lat: String,
    lng: String,
}, {timestamps: false});

module.exports  = mongoose.model('Upazilas', upazilas)
