const bcrypt = require("bcryptjs");

async function hashPassword(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
}

module.exports = hashPassword;