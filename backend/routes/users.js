const express = require("express")
// const mongoose = require("mongoose")
const {user_just_find, user_sign_up, user_login} = require('../controllers/user.controller')

const router = express.Router()

router.get('/',user_just_find)
router.post('/signup',user_sign_up)
router.post('/login',user_login)

module.exports = router