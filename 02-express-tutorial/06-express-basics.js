// import express
const express = require("express");
// invoke express
const app = express();

// app.get(path, callbackFn)
app.get("/", (req, res) => {
  console.log("use hit the resource");
  //res.send("Home Page");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// app.all(path, callbackFn)
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

// app.listen(port, callbackFn)
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
