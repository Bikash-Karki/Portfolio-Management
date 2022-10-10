const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const transactionSchema = new mongoose.Schema({
    stock_name: {
        type: ObjectId,
        required: true,
        ref: 'Stock'
    },
    transaction_type: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price_per_unit: {
        type: Number,
        required: true
    },
    transaction_date: {
        type: Date,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema)