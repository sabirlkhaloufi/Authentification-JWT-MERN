const jwt = require('jsonwebtoken')
require("dotenv").config()
const asyncHandler = require('express-async-handler')
const userModel = require("../Models/UserModel")


const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get token from header
            token = req.headers.authorization.split(" ")[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user by Id for check token autorisation
            req.user = await userModel.findById(decoded.id).select('-password')

            res.json(decoded)
            
            next()
        } catch (error) {
            res.status(401)
            throw new Error("no autorisate")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("not authorizd , no token")
    }
})


module.exports = { protect }