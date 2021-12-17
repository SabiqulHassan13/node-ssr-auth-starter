const showRegister = (req, res) => {
  res.render("auth/register");
};

const showLogin = (req, res) => {
  res.render("auth/login");
};

module.exports = { showRegister, showLogin };
