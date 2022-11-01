require("dotenv").config()
const UserModel = require("../Models/UserModel")
const RoleModel = require("../Models/RoleModel")
const {generateToken, generateTokenReset} = require("../Utils/generateToken");
const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const {sendEmailForUser, sendEmailForResetPass} = require('../Utils/sendMail')


// method : post
// url    : api/auth/login
// acces  : Public
const Login =  asyncHandler(async(req,res) => {

    // check is value is empty
     if(!req.body.email || !req.body.password){
        res.status(400)
        throw new Error("please enter email or password")
    }

    // check user by email
    const user = await UserModel.findOne({email: req.body.email})

    //check by email and compaer password with password hashed
    if(user && (await bcrypt.compare(req.body.password,user.password))){
        const role = await RoleModel.findOne({_id: user.role})
        //generate token => id , => role
        const token = generateToken(user._id,role.role)

        res.cookie("token",token); 
        res.json({
            token
        })
    }
    else{
        res.status(400)
        throw new Error('invalid email or password')
    }
})


// method : post
// url    : api/auth/Register
// acces  : Public
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
    
    //check role is exist and get RoleId
    const findRole = await RoleModel.findOne({role : req.body.role})
    if(!findRole){
        throw new Error("canot find this role")
    }

    //hash password bcriptJs
    const passHash = await bcrypt.hash(req.body.password, 10)
    try{
        const user =  await UserModel.create({
            name:req.body.name,
            email:req.body.email,
            password:passHash,
            role:findRole._id,
            emailToken:null
        });

        //generate token for send in database and email arg(id)
        user.emailToken = await generateToken(user.id);
        
        //insert token generate in database
        await UserModel.updateOne({ _id: user._id }, { $set: { emailToken: user.emailToken } })

        //sendMail verification arg(dataUser);
        sendEmailForUser(req,user,res);


    } catch(error){
        throw new Error(error)
    }

})

// method : post
// url    : api/auth/ForgetPassword
// acces  : Public
const ForgetPassword =  asyncHandler(async(req,res) => {

    //check for empty value
    if(!req.body.email){
        throw new Error("please enter your email")
    }

    // check this email is exist in database
    const user = await UserModel.findOne({email: req.body.email})

    if(user){
        user.emailToken = generateTokenReset(user._id);
        user.save();
        // await UserModel.updateOne({_id: user._id }, { $set: { emailToken: user.emailToken } })
        sendEmailForResetPass(req,user,res)
    }
    else{
        throw new Error("this email not exist")  
    }
})

// method : post
// url    : api/auth/ResetPassword
// acces  : Public
const ResetPassword = asyncHandler(async(req,res) => {
     //get token in route 
     const token = req.params.token;
     const decoded = jwt.verify(token, process.env.JWT_SECRET)

     //get user by Id for compare tokenEmail with email in database
     const user = await UserModel.findById(decoded.id).select('emailToken')
 
     if(user){
         if(user.emailToken == token){

            //get new password in body
            const passHash = await bcrypt.hash(req.body.password, 10)
            await UserModel.updateOne({ _id: user._id }, { $set: { password: passHash } })
            res.json({message : "password is insert"})
         }
         else{
             res.json({message : "password not reset verify"})
         } 
     }else{
         res.json({message : "password not reset verify"})
     }

})

// method  : get
// url     : api/auth/verify-email
// acces   : Public
const verifyEmail = async(req,res) => {

    //get token in route 
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //get user by Id for compare tokenEmail with email in database
    const user = await UserModel.findById(decoded.id).select('emailToken')

    if(user){
        if(user.emailToken == token){
            await UserModel.updateOne({ _id: user._id }, { $set: { isVerified: true } })
            res.json({message : "email is verified"})
        }
        else{
            throw new Error("email not verified")
        } 
    }else{
        throw new Error("email not verified")
    }
}


// method  : get
// url     : api/auth/logout
// acces   : Public
const Logout = async(req,res)=>{
    res.clearCookie('token');
    res.send('Logout');
}


module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
    verifyEmail,
    Logout
}