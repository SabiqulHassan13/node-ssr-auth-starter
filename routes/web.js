const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home.controller");
const authController = require("../controllers/auth.controller");

// Home Routes
router.get("/", homeController.showHome);
router.get("/dashboard", homeController.showDashboard);

// Auth Routes
router.get("/register", authController.showRegister);
router.post("/register", authController.processRegister);

router.get("/login", authController.showLogin);
router.post("/login", authController.processLogin);

module.exports = router;
