const productModel = require("../models/ProductSchema")
const products = require("../data/products.json")
const dotenv = require('dotenv')
const dbConn = require('../configs/DBConfig')
dotenv.config({ path: 'backend/configs/config-dev.env' })
dbConn();

const seedProducts = (req, res, next) => {
    productModel.insertMany(products)
        .then(console.log("All products inserted to database successfully."))
        .catch(err => console.log("Error occured while inserting all records to database||Error=", err));
}

seedProducts();