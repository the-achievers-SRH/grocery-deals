// const express = require('express')
// const products = require('./Constants/Constants')
// const dotenv = require('dotenv')
import  express from 'express'
import {products} from './Constants/Constants.js'
import dotenv from 'dotenv'

dotenv.config()

// ini express app
const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on Port ${PORT}`))