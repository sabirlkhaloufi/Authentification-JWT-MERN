const { Error } = require("mongoose")

// method : post
// url : api/auth/login
// acces : Public
const Login =  (req,res) => {
    if(!req.body.email || !req.body.password){
        res.status(400)
        throw new Error("please enter email or password")
    }
    res.status(200).send(req.body)
}


// method : post
// url : api/auth/Register
// acces : Public
const Register =  (req,res) => {
    if(!req.body.email || !req.body.name || !req.body.password){
        res.status(400)
        throw new Error("please enter email or name or password")
    }
    res.status(200).send(req.body)
}


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