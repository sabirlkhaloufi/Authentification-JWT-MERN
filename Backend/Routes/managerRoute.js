const express = require('express')
const router = express.Router()

const {GetManager} = require('../Controllers/managerController')

const {isManager} = require('../Middlewares/managerMiddlware')
const {protect} = require('../Middlewares/authMiddlware')


router.get('/manager/me',protect,isManager,GetManager)

module.exports = router