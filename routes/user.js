const express = require("express");
const { handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById, 
    handleDeleteUserById, 
    handlePutUserById,
    handleCreateNewUser
} = require("../controllers/user");

const router = express.Router();
exports.router = router;




router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser)


// Login Route



// Routes
router.route("/:id")
.get(handleGetUserById)
.put(handlePutUserById)
.delete(handleDeleteUserById)
.patch(handleUpdateUserById)

module.exports = router;