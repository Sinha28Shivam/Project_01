const User = require('../models/user');
const Userlogin = require('../models/userlogin');
const bcrypt = require('bcryptjs');

// Sign-up
async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await Userlogin.create({
        name,
        email,
        password
    });
    return res.status(201).json({ Msg: "User Created" });
    
}

// Sign-in
async function handleUserLogin(req, res){
    const { email, password } = req.body;
    const user = await Userlogin.findOne({ email});
    if(!user){
        return res.status(404).json({ Msg: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({ Msg: "Invalid Password" });
    }
    return res.status(200).json({ Msg: "Login Successful" });
}




// Admin: Get all registered users

async function handleGetAllRegistardUser(req, res) {
    try{
        const allUser = await Userlogin.find({}, { password: 0 });
        return res.status(200).json(allUser);
    }catch(error){
        console.log("Error", error);
        return res.status(500).json({ Msg: "Internal Server Error" });
    }
}

module.exports = {
    handleUserSignup,
    handleGetAllRegistardUser,
    handleUserLogin
}