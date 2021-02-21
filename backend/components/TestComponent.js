//This is one method of exporting, you can find another way of exporting in ProductComponent.js
exports.TestComponent=(req,res,next)=>{
    res.status(200).json({
        status:"success",
        message:"This message returned from TestComponent.js"
    })
}