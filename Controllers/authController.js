require("dotenv").config()
const UserModel = require("../Models/UserModel")
const RoleModel = require("../Models/RoleModel")
const jwt = require("jsonwebtoken")
const asyncHandler = require('express-async-handler');
const {sendEmailForUser} = require('../Utils/sendMailRegister')


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

    //check role is exist and get RoleId
    const findRole = await RoleModel.findOne({role : req.body.role})
    if(!findRole){
        throw new Error("canot find this role")
    }

    try{
        const user =  await UserModel.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:findRole._id,
            isVerified:false,
            emailToken:null
        });

        user.emailToken = await generateToken(user.id);

        await UserModel.updateOne({ _id: user._id }, { $set: { emailToken: user.emailToken } })
        sendEmailForUser(req,user,res);

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

//generate token for send in email and login
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '1d'
    })
}

// generate token for reset password
const generateTokenReset = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '10m'
    })
}



// method : get
// url : api/auth/verify-email
// acces : Public
const verifyEmail = async(req,res) => {
    //get token in route 
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //get user by Id for compare tokenEmail with email in database
    const user = await UserModel.findById(decoded.id).select('emailToken')

    if(user){
        if(user.emailToken == token){
            await UserModel.updateOne({ _id: user._id }, { $set: { isVerified: true } })
            res.json({message : "email is verify"})
        }
        else{
            res.json({message : "email not verify"})
        } 
    }else{
        res.json({message : "email not verify"})
    }
    // let dateNow = new Date();
    // console.log(decoded.exp < dateNow.getTime() - decoded.iat);
    // console.log(user);
}


module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
    verifyEmail
}