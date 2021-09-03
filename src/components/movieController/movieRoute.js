const express = require("express")
const router = express.Router();
const { createMovie, readData } = require('./movieController')


router.post('/user/movie', createMovie)
router.get('/user/readData/:id', readData)

module.exports = router
