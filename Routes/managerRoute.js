const express = require('express')
const router = express.Router()

const {GetManager} = require('../Controllers/managerController')

const {isManager} = require('../Middlewares/managerMiddlware')
router.get('/manager/me',isManager,GetManager)

module.exports = router