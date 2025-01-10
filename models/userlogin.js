const mongoose = require("mongoose");
const hashPassword = require("../middlewares/userlogin");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', hashPassword)



const Userlogin = mongoose.model("Userlogin", userSchema);
module.exports = Userlogin;