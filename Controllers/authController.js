const { Error } = require("mongoose");
const UserModel = require("../Models/UserModel")
const asyncHandler = require('express-async-handler')

// method : post
// url : api/auth/login
// acces : Public
const Login =  (req,res) => {
    if(!req.body.email || !req.body.password){
        res.status(400)
        throw new Error("please enter email or password")
    }
    res.status(200).json(req.body)
}


// method : post
// url : api/auth/Register
// acces : Public
const Register =  asyncHandler(async(req,res) => {
    if(!req.body.email || !req.body.name || !req.body.password){
        res.status(400)
        throw new Error("please enter email or name or password")
    }
    
    try{
        const data =  await UserModel.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        res.status(200).send(data)
    }catch(error){
        throw new Error("user is exist")
    }

})

// method : post
// url : api/auth/ForgetPassword
// acces : Public
const ForgetPassword =  (req,res) => {
    if(!req.body.email){
        res.status(400)
        throw new Error("please enter email")
    }
    res.status(200).send(req.body)
}


// method : post
// url : api/auth/ResetPassword
// acces : Public
const ResetPassword =  (req,res) => {
    const token = req.params.token
    res.status(200).send(token)
}


module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword
}