const Stock = require('../models/stockModel')
exports.demoFunc = (req, res) => {
    res.send(`This accessed from the controller`)
}

//to post stock
exports.postStock = async (req, res) => {
    let stock = new Stock({
        stock_name: req.body.stock_name
    })
    stock = await stock.save()
    if (!stock) {
        return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(stock)
}

//to get all stocks
exports.stockList = async (req, res) => {
    const stock = await Stock.find()
    if (!stock) {
        return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(stock)
}

//to get single stock

exports.stockDetails = async (req, res) => {
    const stock = await Stock.findById(req.params.id)
    if (!stock) {
        return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(stock)
}