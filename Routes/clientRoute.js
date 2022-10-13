const express = require('express')
const router = express.Router()

const {GetClient} = require('../Controllers/clientController')

router.get('/client/me',GetClient)

module.exports = router