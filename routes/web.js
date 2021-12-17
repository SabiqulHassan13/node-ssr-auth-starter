const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

// Home Routes
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// Auth Routes
router.get("/register", authController.showRegister);
router.get("/login", authController.showLogin);


module.exports = router;
