// method : get
// url : api/user/livreur/me
// acces : private
const GetLivreur =  async(req,res) => {
    res.status(200).send('Bonjour livreur')
}

module.exports = {
    GetLivreur
}