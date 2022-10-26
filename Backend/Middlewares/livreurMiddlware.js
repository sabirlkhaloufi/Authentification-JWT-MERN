const jwt = require('jsonwebtoken')
require("dotenv").config()
const asyncHandler = require('express-async-handler')

const isLivreur = asyncHandler(async (req, res, next) => {
    //get token in coockies
    let token = req.cookies.token

    //decode token for get role
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    //check role is client
    if(decoded.role == "livreur"){
        next();
    }
    else{
        res.status(401)
        throw new Error("no autorisate")
    }
})


module.exports = { isLivreur }