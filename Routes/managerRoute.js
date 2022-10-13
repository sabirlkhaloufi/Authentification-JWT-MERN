const express = require('express')
const router = express.Router()

const {GetManager} = require('../Controllers/managerController')

router.get('/manager/me',GetManager)

module.exports = router