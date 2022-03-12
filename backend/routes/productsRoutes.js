import express from 'express'
import Product from '../models/product.js'
import asyncHandler from 'express-async-handler'
import { products } from '../Constants/Constants.js'

const router = express.Router()

// desc: Fetch all products
// route: GET /api/products
// access: Public
router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

// desc: Fetch single products
// route: GET /api/products/:id
// access: Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(products){
        res.json(product)
    }else{
        res.status(404).json({message: 'Product Not Found'})
    }
}))

export default router