const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    price : String,
    description : String,
    quantity : String,
})

const Itemdb = mongoose.model('itemdb', schema);

module.exports = Itemdb;