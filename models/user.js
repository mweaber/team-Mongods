const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true},
    name: {type: String, required: true},
    img: {type: String, required: true},
    googleid: {type: Number, required: true}
    // lastName: {type: String, required: true},
    // passwordToken: {type: String, required: true},
});

const User = mongoose.model("User", userSchema);

module.exports = User;