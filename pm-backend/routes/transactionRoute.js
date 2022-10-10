const express = require('express')
const { postTransaction, transactionLists, transactionDetails } = require('../controllers/transactionController')
const router = express.Router()

router.post('/posttransaction', postTransaction)
router.get('/transactionlists', transactionLists)
router.get('/transactiondetails/:id', transactionDetails)

module.exports = router