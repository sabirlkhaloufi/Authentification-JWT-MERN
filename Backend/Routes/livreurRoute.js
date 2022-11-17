const express = require('express')
const router = express.Router()

const {GetLivreur} = require('../Controllers/livreurController')


const {isLivreur} = require('../Middlewares/livreurMiddlware')
const {protect} = require('../Middlewares/authMiddlware')

router.get('/livreur/me',protect,isLivreur,GetLivreur)

module.exports = router