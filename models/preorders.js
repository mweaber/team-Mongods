const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preorderSchema = new Schema({
    // id: {type: String, required: true},
    collectible_name: {type: String, required: true},
    releaseDate: {type: String, required: true},
    producer: {type: String, required: true},
    // collectible_name: { type: String, required: true},
    // production_co: {type: String, required: true},
    // your_num: {type: String, required: true},
    // edition: {type: String, required: false},
    // edition_num: {type: String, required: true},
    // notes: {type: String, required: false},
    image_url1: {type: String, require: true},
    // image_url2: {type: String, require: false},
    // image_url3: {type: String, require: false},
    // image_url4: {type: String, require: false},
    // image_url5: {type: String, require: false},
    userID: {type: String, require: true}
});

const Preorders = mongoose.model("Preorders", preorderSchema);

module.exports = Preorders;