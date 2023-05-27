const mongoose = require("mongoose");

const userquery = new mongoose.Schema({
    Question: {
        type: String,
        required: true
    },
    Answer: {
        type: String,
        required: true
    },
    Usermail: {
        type: String,
        required: true
    }
},{timestamps: true})

const Userquery = mongoose.model('userquery',userquery);

module.exports = Userquery;