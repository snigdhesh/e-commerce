const express = require('express');
const productRouter = express.Router();
const productComponent = require('../controllers/ProductComponent');

productRouter
    .route('/products')
    .get(productComponent);

module.exports = productRouter; 