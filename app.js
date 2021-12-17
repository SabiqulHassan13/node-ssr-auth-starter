const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// middleware list
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(expressLayouts);

// activate template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set("layout", "layouts/layout");

// route list
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.get("/register", (req, res) => {
  res.render("auth/register");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
