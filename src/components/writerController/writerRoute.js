const express = require("express")
const router = express.Router();
const { createWriter, getData, readUser } = require('./writerController')


router.post('/user/writer', createWriter)
router.get('/user/getData', readUser)

module.exports = router
