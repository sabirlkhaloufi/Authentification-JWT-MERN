const express = require('express')
const router = express.Router()

const {GetLivreur} = require('../Controllers/livreurController')

router.get('/livreur/me',GetLivreur)

module.exports = router