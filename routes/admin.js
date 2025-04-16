const express = require('express');
const router = express.Router();
const ProductService = require('../services/ProductService');
const productService = new ProductService(db);
const UserService = require('../services/UserService');
const userService = new UserService(db);
const jsend = require('jsend');
var db = require('../models')

router.use(jsend.middleware);
router.post('/addProduct', (req, res) => {
    const { Name, Description, Price, Stock } = req.body;
    const ImageUrl = "placeholder";
    try {
        productService.create(Name, Price, Description, ImageUrl, Stock);
        res.jsend.success({"result": "Product has been created."})
    } catch(err) {
        res.jsend.fail({"result": err})
    }
})

module.exports = router;