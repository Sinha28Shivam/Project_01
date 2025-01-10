const user = require('../models/userlogin');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await user.create({
        name,
        email,
        password
    });
    return res.status(201).json({ Msg: "User Created" });
    
}

module.exports = {
    handleUserSignup
}