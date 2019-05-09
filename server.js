require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const passport = require('./auth/passportsetup');
const authRouter = require('./routes/auth-routes');
const apiRouter = require('./routes/api-routes');
// const db = require("./models");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cookies
app.use(cookieSession({
  name:process.env.COOKIE_NAME,
  maxAge: 1000 * 60 * 60 * 24,
  keys: [
    process.env.COOKIE_KEY1,
    process.env.COOKIE_KEY2,
    process.env.COOKIE_KEY3,
  ]
}));

// passport init
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Define API routes here
// app.use(router);
app.use("/api", apiRouter);
app.use("/auth", authRouter);

//other requests his React App
//any other API routes must be defined before this line
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

/// DB setup
mongoose.connect("mongodb://localhost/Mongods", {useNewUrlParser: true})
  .then(app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  }));
