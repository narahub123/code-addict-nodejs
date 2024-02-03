const express = require("express");
const app = express();

// req => middleware => res

// middleware
// when you work with middleware, you must pass it on to next
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

// Home Router
app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

// About Router
app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
