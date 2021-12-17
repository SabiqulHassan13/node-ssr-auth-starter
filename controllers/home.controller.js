const showHome = (req, res) => {
  res.render("home");
};

const showDashboard = (req, res) => {
  res.render("dashboard");
};

module.exports = { showHome, showDashboard };
