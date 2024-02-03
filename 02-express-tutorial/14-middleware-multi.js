const express = require("express");
const app = express();
const logger = require("./13-logger");
const authorize = require("./14-authorize");

// execution of multiple middleware
app.use([logger, authorize]);

// Home Router
app.get("/", (req, res) => {
  res.send("Home Page");
});

// About Router
app.get("/about", (req, res) => {
  res.send("About Page");
});

// products Router
app.get("/api/products", (req, res) => {
  res.send("Products Page");
});

// items Router
app.get("/api/items", (req, res) => {
  // console.log(req.user);
  res.send("Items Page");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
