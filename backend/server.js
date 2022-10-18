 const express = require('express')
 const products = require('./Data/products')

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

 app.listen(5000, console.log('Server Running on Port 5000'))