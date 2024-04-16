const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/users.controller')

router.post('/register', registerUser)

module.exports = router;