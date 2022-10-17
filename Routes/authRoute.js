const express = require('express')
const router = express.Router()
const {Login,Register,ForgetPassword,ResetPassword,verifyEmail} = require('../Controllers/AuthController')

router.post('/login',Login)
router.post('/register',Register)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword)
router.get('/verify-email/:token',verifyEmail)

module.exports = router