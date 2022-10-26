const jwt = require('jsonwebtoken')
require("dotenv").config()
const asyncHandler = require('express-async-handler')

const isManager = asyncHandler(async (req, res, next) => {
    //get token in coockies
    let token = req.cookies.token

    //decode token for get role
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    //check role is client
    if(decoded.role == "manager"){
        next();
    }
    else{
        res.status(401)
        throw new Error("no autorisate")
    }
})


module.exports = { isManager }