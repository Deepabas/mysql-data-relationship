const express = require("express")
const router = express.Router();
const { createAddress } = require('./controller')


router.post('/user/address', createAddress)

module.exports = router
