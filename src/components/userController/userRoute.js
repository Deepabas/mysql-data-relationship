const express = require("express")
const router = express.Router();
const { createUsers, readUsers, updateUser, removedUser, } = require('./userController')

router.post('/user/create', createUsers)
router.get('/user/read', readUsers)
router.put('/user/update/:id', updateUser)
router.delete('/user/delete/:id', removedUser)

module.exports = router
