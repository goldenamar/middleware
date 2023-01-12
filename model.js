const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
    name : String,
    email: String,
    password: String
});

const UserModel = model("User", UserScheme);

module.exports = UserModel