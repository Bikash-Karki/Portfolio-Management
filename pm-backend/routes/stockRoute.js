const express = require('express')
const { demoFunc, postStock, stockList, stockDetails } = require('../controllers/stockController')
const router = express.Router()

router.get('/welcome', demoFunc)
router.post('/poststock', postStock)
router.get('/stocklists', stockList)
router.get('/stockdetails/:id', stockDetails)

module.exports = router