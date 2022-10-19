 const express = require('express')
 const dotenv = require('dotenv')
 const products = require('./Data/products')

 dotenv.config()
 const app = express()

 app.get('/', (req, res) => { 
    res.send('API Connected Successfully...')
 })

 app.get('/api/products', (req, res) => { 
    //server sends back product details as json format
    res.json(products)
 })

 app.get('/api/products/:id', (req, res) => { 
    //server sends back product details as json format
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
 })

const PORT = process.env.PORT || 5000

 app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode and port number ${PORT}`))