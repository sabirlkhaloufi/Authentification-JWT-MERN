const express = require('express')
const router = express.Router()

const {GetClient} = require('../Controllers/clientController')
const {protect} = require('../Middlewares/authMiddlware')

router.get('/client/:id',protect,GetClient)
module.exports = router