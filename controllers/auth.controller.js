// const User = require("../models/user.model");

const showRegister = (req, res) => {
  res.render("auth/register");
};

const showLogin = (req, res) => {
  res.render("auth/login");
};

const processRegister = async (req, res) => {
  const { username, email, password } = req.body;

  // const user = new User(username, email, password);
  // await user.register();

  res.redirect("/login");
};

const processLogin = (req, res) => {};

module.exports = { showRegister, showLogin, processRegister, processLogin };
