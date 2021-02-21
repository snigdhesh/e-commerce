const express = require('express');
const productRouter = express.Router();
const {
    createProduct,
    getProducts,
    deleteProducts,
    getProductById,
    updateProductById, 
    deleteProductById} = require('../components/ProductComponent');
const productModel = require('../models/ProductSchema');

productRouter.route('/products').get(getProducts);
productRouter.route('/product')
    .post(createProduct)
    .delete(deleteProducts);
productRouter.route("/product/:id")
    .get(getProductById)
    .put(updateProductById)
    .delete(deleteProductById);

module.exports = productRouter; 