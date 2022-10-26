const UserModel = require("../Models/UserModel")

// method : get
// url : api/user/client/me
// acces : private
const GetClient =  async(req,res) => {
    
    res.send("Bonjour client")
}

module.exports = {
    GetClient
}