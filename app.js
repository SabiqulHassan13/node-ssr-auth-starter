const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const webRoutes = require("./routes/web");

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
app.use("/", webRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
