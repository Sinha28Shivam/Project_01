const express = require('express');
const { handleUserSignup, 
    handleGetAllRegistardUser,
    handleUserLogin  
} = require('../controllers/userlogin');
const router = express.Router();

// POST /login
router.post("/", handleUserSignup)
// router.post("/login", handleUserLogin)
// .post(handleUserSignup)
router.post("/user/sign-in", handleUserLogin)

// GET /login
router.get("/admin/user", handleGetAllRegistardUser)


// Load User model
module.exports = router;