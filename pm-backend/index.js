const express = require('express')
require('dotenv').config()
const db = require('./database/connection')
const bodyParser = require('body-parser')
const cors = require('cors')

const stockRoute = require('./routes/stockRoute')
const transactionRoute = require('./routes/transactionRoute')

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())

app.get('/hello', (req, res) => {
    res.send('Welcome to Portfolio Management Task by Novelty Technology')

})

//routes
app.use('/api', stockRoute)
app.use('/api', transactionRoute)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})

