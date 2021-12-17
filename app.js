const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const db = require("./config/db-mongodb");
const webRoutes = require("./routes/web");

const app = express();

// middleware list
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(expressLayouts);

// activate template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set("layout", "layouts/layout");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// route list
app.use("/", webRoutes);

// connect mongodb & run server
db.connectDB()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect DB...");
    console.log(err);
  });
