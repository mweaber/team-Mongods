const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ebaySchema = new Schema({
    title: { type: String, required: false},
    link: {type: String, required: false},
    image: {type: String, require: false},
    userID: {type: String, require: false}
});

const Ebay = mongoose.model("Ebay", ebaySchema);

module.exports = Ebay;