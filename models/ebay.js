const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ebaySchema = new Schema({
    title: { type: String, required: true},
    location: {type: String, required: true},
    image: {type: String, require: true},
});

const Ebay = mongoose.model("Ebay", ebaySchema);

module.exports = Ebay;