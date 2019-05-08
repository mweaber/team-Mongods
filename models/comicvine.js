const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    title: { type: String, required: true},
    synopsis: String,
    image: {type: String, require: true},
    
});

const Comic = mongoose.model("Comic", comicSchema);

module.exports = Comic;