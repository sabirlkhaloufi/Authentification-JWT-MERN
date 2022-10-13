// method : get
// url : api/user/client/me
// acces : private
const GetClient =  (req,res) => {
    res.status(200).send('Bonjour Omaima')
}

module.exports = {
    GetClient
}