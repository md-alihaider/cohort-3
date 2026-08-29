const express = require('express')
const upload = require('../config/multer.config.js')
const {create} = require('../controllers/user.controller.js')

const router = express.Router()

router.post('/create',upload.single('image'),create)

module.exports = router