const Userlogin = require('../models/userlogin');


async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await Userlogin.create({
        name,
        email,
        password
    });
    return res.status(201).json({ Msg: "User Created" });
    
}

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
    handleGetAllRegistardUser
}