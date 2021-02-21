const productModel = require("../models/ProductSchema")

exports.createProduct = (req, res, next) => {
    //Please find alternative approach to bellow code in createProductAlternate() - using async, await.
    productModel.create(req.body).then(product => {
        console.log("Product created.");
        res.status(201).json({
            status: true,
            product
        })
    }).catch(err => console.log(err));

}
/**
 * This is an alternate approach to createProduct() function - using async, await.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.createProductAlternate = async (req, res, next) => {
    try {
        const product = await productModel.create(req.body);
    } catch (err) { console.log(err) }

}
exports.getProducts = (req, res, next) => {
    productModel.find().then(productList => {
        return res.status(200).json({
            status: 200,
            count: productList.length,
            productList
        })
    }).catch(err => {
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    })

}
exports.getProductById = (req, res, next) => {
    productModel.findById(req.params.id).then(product => {
        return res.status(200).json({
            status: true,
            product
        })
    }).catch(err=> console.log(err));
}
exports.updateProductById = (req, res, next) => {
    productModel.findById(req.params.id).then(product => {
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: `Product with id ${req.params.id} not found`
            })
        }
    }).catch((err) => console.log("Error occured while fetching product from database.", err));
    productModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    }).then((product)=>{
        return res.status(200).json({
            status: true,
            message: "Updated product"
        })
    }).catch(err=> console.log(err));
}
exports.deleteProducts = (req, res, next) => {
    productModel.deleteMany().then(() => {
        res.status(200).json({
            status: 200,
            message: "Cleared all records in database."
        })
    }).catch(error => {
        res.status(500).json({
            status: 500,
            message: "Error occurred while clearing all records in database."
        })
    })

}
exports.deleteProductById=(req,res,next)=>{
    productModel.findById(req.params.id).then(product=>{
        if(!product){
            return res.status(404).json({
                status: 404,
                message: "Product not found"
            })
        }
        product.remove();
        return res.status(200).json({
            status: 200,
            message: "Product deleted."
        })
    }).catch(err=>{
        console.log("Error occurred while removing product")
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    })
}
// module.exports = getProducts; //This format of exporting

/**
 * module.exports = getProducts; //This format of exporting is using while exporting only one function.
 * But if we want to export multiple functions from single .js file, we use exports.<functionName>
 */