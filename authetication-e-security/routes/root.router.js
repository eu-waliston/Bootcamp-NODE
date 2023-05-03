const express = require("express");
const path = require("path");
const passport = require("passport");
const checkLoggedIn = require("../auth/checkLoggedIn");

const root = express.Router();

root.get("/secret", checkLoggedIn, (req, res) => {
  res.send("Your personal secret value is 42!");
});

root.get("/auth/google", passport.authenticate('google', {
    scope: ['email'],
}));

root.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: false,
  }),
  (req, res) => {
    console.log("Google called us back!");
  }
);

root.get("/auth/logout", (req, res) => {});
root.get("/failure", (req, res) => {
  return res.send("Failed to log in");
});

root.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = root;
