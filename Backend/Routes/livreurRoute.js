const express = require('express')
const router = express.Router()

const {GetLivreur} = require('../Controllers/livreurController')

const {isLivreur} = require('../Middlewares/livreurMiddlware')
router.get('/livreur/me',isLivreur,GetLivreur)

module.exports = router