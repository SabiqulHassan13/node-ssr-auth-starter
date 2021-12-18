const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const webRoutes = require("./routes/web");
// const { connectMongoDB } = require("./config/database");
const { connectMongoDB } = require("./config/db-mongo");

const app = express();
const PORT = 3000;

// connect database
connectMongoDB()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// .then(function () {
//   console.log("Connected DB successfully");
//   app.listen(PORT);
// })
// .catch(function (err) {
//   console.log("Failed DB connection");
//   console.log(err);
// });

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

// run server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
