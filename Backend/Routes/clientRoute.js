const express = require('express')
const router = express.Router()

const {isClient} = require('../Middlewares/clientMiddlware')
const {GetClient} = require('../Controllers/clientController')
const {protect} = require('../Middlewares/authMiddlware')

router.get('/client/me',protect,isClient,GetClient)
module.exports = router