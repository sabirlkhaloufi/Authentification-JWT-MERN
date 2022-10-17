const UserModel = require("../Models/UserModel")

// method : get
// url : api/user/client/me
// acces : private
const GetClient =  async(req,res) => {
    const data = await UserModel.findById(req.user.id);
    res.json(data)
}

module.exports = {
    GetClient
}