require("dotenv").config();
const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./config/db-sequelize");
const webRoutes = require("./routes/web");
const {
  notFoundHandler,
  commonErrorHandler,
} = require("./middlewares/error-handler");

// app init
const app = express();
// dotenv.config();
const PORT = process.env.PORT;

// connect database
connectDB();

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("mongodb connection successful !"))
//   .catch((err) => console.log(err));

// middleware list
// set request parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static files path
app.use(express.static(path.join(__dirname, "public")));

// activate template engine
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set("layout", "layouts/layout");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// set cookie parser
app.use(cookieParser(process.env.APP_COOKIE_SECRET));

// route list
app.use("/", webRoutes);

// error handling
app.use(notFoundHandler);
app.use(commonErrorHandler);

// run server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
