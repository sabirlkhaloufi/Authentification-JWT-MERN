const { Error } = require("mongoose");
require("dotenv").config()
const UserModel = require("../Models/UserModel")
const RoleModel = require("../Models/RoleModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const asyncHandler = require('express-async-handler')

// method : post
// url : api/auth/login
// acces : Public
const Login =  asyncHandler(async(req,res) => {

     if(!req.body.email || !req.body.password){
        res.status(400)
        throw new Error("please enter email or password")
    }

    // check user by email
    const user = await UserModel.findOne({email: req.body.email})

    //check by email and compaer password with password hashed
    if(user && (await bcrypt.compare(req.body.password,user.password))){
        res.json({
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('invalid email or password')
    }
})


// method : post
// url : api/auth/Register
// acces : Public
const Register =  asyncHandler(async(req,res) => {
    //check input if empty
    if(!req.body.email || !req.body.name || !req.body.password){
        res.status(400)
        throw new Error("please enter email or name or password")
    }

    // check if compte exist
    const userExist = await UserModel.findOne({email: req.body.email})
    if(userExist){
        throw new Error("user is exist")
    }

    //check role id exist
    const findRole = await RoleModel.findOne({role : req.body.role})
    if(!findRole){
        throw new Error("canot find this role")
    }

    //hash passsword
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    try{
        const user =  await UserModel.create({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
            role:findRole._id
        });
        res.json({
            token: generateToken(user._id)
        })
    }catch(error){
        throw new Error(error)
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

//generate token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword
}