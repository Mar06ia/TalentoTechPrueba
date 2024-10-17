//crear express
const express = require('express')

// enlazar funciones del controlador
const { loginUser, signupUser } = require('../controllers/userController')

//crear enrutador
const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router