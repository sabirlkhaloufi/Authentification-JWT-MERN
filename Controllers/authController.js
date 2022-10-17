const { Error } = require("mongoose");
require("dotenv").config()
const UserModel = require("../Models/UserModel")
const RoleModel = require("../Models/RoleModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler');
const nodemailer = require("nodemailer")

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
            token: generateToken(user._id,user.name )
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
            role:findRole._id,
            isVerified:false
        });
        user.token = await generateToken(user.id);
        // localStorage.setItem("token",user.token)
        // await sendEmailVerify(user);

        //send email verification
        mailOption =  {
            from: '"verify your email " <<sabirkhalloufi@gmail.com>>',
            to: user.email,
            subject: 'codewithid -verify yur email',
            html : `<h2> ${user.name} thanks for register on our site</h2>
                    <h4>Please verify your email to contenue ....</h4>
                    <a href="http://${req.headers.host}/api/auth/verify-email/${user.token}">Verify Your Email</a>`
        }
        
        transporter.sendMail(mailOption, function(error, info){
            if(error){
                throw new Error(error)
            }
            else{
                res.json({message : "verification email is send to your email account"})
            }
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

// const verifyEmail = (req, res) => {}

//generate token
const generateToken = (id,name) => {
    return jwt.sign({id,name}, process.env.JWT_SECRET,{
        expiresIn: '5m'
    })
}


// generate transporter nodemailler for send email verification
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user : 'sabirkhaloufi@gmail.com',
        pass : 'daemezuqtqswztlw',
        
    },
    tls: {
        rejectUnauthorized: false
    }
})



// function for send email verification to email user 
//parametre : user
// const sendEmailVerify = async(req,user,res) =>{
//     mailOption =  {
//         from: '"verify your email " <<sabirkhalloufi@gmail.com>>',
//         to: user.email,
//         subject: 'codewithid -verify yur email',
//         html : `<h2> ${user.name} thanks for register on our site</h2>
//                 <h4>Please verify your email to contenue ....</h4>
//                 <a href="http://${req.headers.host}/user/verify-email?token=${user.token}">Verify Your Email</a>`
//     }
    
//     transporter.sendMail(mailOption, function(error, info){
//         if(error){
//             throw new Error(error)
//         }
//         else{
//             res.json({message : "verification email is send to your email account"})
//         }
//     })
// } 


module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword
}