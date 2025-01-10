const express = require('express');
const { handleUserSignup } = require('../controllers/userlogin');
const router = express.Router();


router.post('/login', handleUserSignup);


// Load User model
module.exports = router;