require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const router = require("./routes");
// const mongoose = require("mongoose");
const mongoose = require("mongoose")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
/// DB setup
mongoose.connect("mongodb://localhost/Mongods", {useNewUrlParser: true});

// Define API routes here
app.use(router);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});