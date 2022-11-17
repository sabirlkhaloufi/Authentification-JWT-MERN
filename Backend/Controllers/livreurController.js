const RoleModel = require("../Models/RoleModel")

// method : get
// url : api/user/livreur/me
// acces : private
const GetLivreur =  async(req,res) => {
    let user = req.user;
    user.role = await RoleModel.findOne({_id: user.role[0]})

    res.status(201).json(user)

}

module.exports = {
    GetLivreur
}