// method : get
// url : api/user/manager/me
// acces : private
const GetManager =  (req,res) => {
    res.status(200).send('Bonjour Riad')
}

module.exports = {
    GetManager
}