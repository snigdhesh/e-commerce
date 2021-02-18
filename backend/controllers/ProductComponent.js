const { response } = require("../app")
const productRouter = require("../routes/ProductRouter")



const productComponent = (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "This is response coming from product component"
    })
}
module.exports = productComponent; //This is one method of exporting, you can find another way of exporting in TestComponent.js