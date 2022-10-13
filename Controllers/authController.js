const { Error } = require("mongoose")

// method : post
// url : api/auth/login
// acces : Public
const Login =  (req,res) => {
    if(!req.body.email){
        res.status(400)
        throw new Error("please enter email")
    }
    res.status(200).send(req.body)
}


// method : post
// url : api/auth/Register
// acces : Public
const Register =  (req,res) => {
    res.status(200).send('this a register function')
}


// method : post
// url : api/auth/ForgetPassword
// acces : Public
const ForgetPassword =  (req,res) => {
    res.status(200).send('this a Forget Password function')
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