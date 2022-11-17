const UserModel = require("../Models/UserModel")
const RoleModel = require("../Models/RoleModel")

// method : get
// url : api/user/client/me
// acces : private
const GetClient =  async(req,res) => {
    let user = req.user;
    user.roleName = await RoleModel.findOne({_id: user.role[0]})
    res.json(user)
}

module.exports = {
    GetClient
}