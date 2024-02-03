const express = require("express");
const app = express();
const logger = require("./13-logger");
// req => middleware => res
// order matters
app.use("/api", logger);
// apply it to any route after api

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
  res.send("Items Page");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
