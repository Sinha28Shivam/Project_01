const express = require('express');
const { handleUserSignup, handleGetAllRegistardUser } = require('../controllers/userlogin');
const router = express.Router();

// POST /login
router.post("/", handleUserSignup)
// .post(handleUserSignup)

// GET /login
router.get("/registerUser", handleGetAllRegistardUser)


// Load User model
module.exports = router;