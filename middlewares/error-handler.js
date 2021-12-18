const createError = require("http-errors");

// 404 Not Found
function notFoundHandler(req, res, next) {
  next(createError("404", "Content Not Found"));
}

// default error handler
function commonErrorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  // html response
  if (res.locals.html) {
    return res.render("error", {
      title: "Error Page",
    });
  }

  // json response
  res.render(res.locals.error);
}

module.exports = {
  notFoundHandler,
  commonErrorHandler,
};
