const mongoose = require("mongoose");

const UserModel = mongoose.model("users", {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

module.exports = UserModel;