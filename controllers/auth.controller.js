const showRegister = (req, res) => {
  res.render("auth/register");
};

const showLogin = (req, res) => {
  res.render("auth/login");
};

const processRegister = (req, res) => {
  
};

const processLogin = (req, res) => {};

module.exports = { showRegister, showLogin, processRegister, processLogin };
