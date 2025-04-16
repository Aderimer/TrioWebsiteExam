const express = require('express');
const router = express.Router();
const db = require('../models');
const ProductService = require('../services/ProductService');
const productService = new ProductService(db);
var cache = require('../middleware/caching');
var client = require('../redis.js')

router.get('/', async (req, res) => {
    const products = await productService.getAll();
    await client.set(req.originalUrl, JSON.stringify(products));
    return res.render('shop', { data: products });
})

module.exports = router;