// method : get
// url : api/user/manager/me
// acces : private
const GetManager =  async(req,res) => {
    res.status(200).json('Bonjour manager')
}

module.exports = {
    GetManager
}