const nodemailer = require("nodemailer");

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


//function for send emil verification arguments(user:)
const sendEmailForUser = (req,user,res) =>{
        //send email verification
    mailOption =  {
        from: '"verify your email " <<sabirkhalloufi@gmail.com>>',
        to: user.email,
        subject: 'codewithid -verify yur email',
        html : `<h2> ${user.name} thanks for register on our site</h2>
                <h4>Please verify your email to contenue ....</h4>
                <a href="http://${req.headers.host}/api/auth/verify-email/${user.emailToken}">Verify Your Email</a>`
    }
    
    transporter.sendMail(mailOption, function(error, info){
        if(error){
            throw new Error(error)
        }
        else{
            res.json({message : "verification email is send to your email account"})
        }
    })
    
}

//function for reset password arguments(user:)
const sendEmailForResetPass = (req,user,res) =>{
    //send email verification
mailOption =  {
    from: '"verify your email " <<sabirkhalloufi@gmail.com>>',
    to: user.email,
    subject: 'codewithid -verify yur email',
    html : `<h2> ${user.name} thanks for register on our site</h2>
            <h4>Please verify your email to contenue ....</h4>
            <a href="http://${req.headers.host}/api/auth/verify-email/${user.emailToken}">Verify Your Email</a>`
}

transporter.sendMail(mailOption, function(error, info){
    if(error){
        throw new Error(error)
    }
    else{
        res.json({message : "verification email is send to your email account"})
    }
})

}

module.exports = {sendEmailForUser}