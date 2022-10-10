const Transaction = require('../models/transactionModel')

//to post transaction

exports.postTransaction = async (req, res) => {
    let transaction = new Transaction({
        stock_name: req.body.stock_name,
        transaction_type: req.body.transaction_type,
        quantity: req.body.quantity,
        price_per_unit: req.body.price_per_unit,
        transaction_date: req.body.transaction_date,
    })
    transaction = await transaction.save()

    if (!transaction) {
        return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(transaction)
}

//get transaction lists

exports.transactionLists = async (req, res) => {
    const transaction = await Transaction.find().populate('stock_name')
    if (!transaction) {
        return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(transaction)
}
//to get individual transaction detail

exports.transactionDetails = async (req, res) => {
    const transaction = await Transaction.findById(req.params.id).populate('stock_name')
    if (!transaction) {
        return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(transaction)
}