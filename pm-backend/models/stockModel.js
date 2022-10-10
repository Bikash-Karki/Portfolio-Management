const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    stock_name: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Stock', stockSchema)