const RoleModel = require("../Models/RoleModel")

// method : get
// url : api/user/manager/me
// acces : private
const GetManager =  async(req,res) => {
    let user = req.user;
    user.role = await RoleModel.findOne({_id: user.role[0]})
    res.json(user)
}

module.exports = {
    GetManager
}