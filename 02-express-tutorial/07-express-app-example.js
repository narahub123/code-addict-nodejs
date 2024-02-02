const express = require("express");
const path = require("path");

const app = express();

// set up static and middleware
// static asset : a file that sort of doesn't need to change
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen("5000", () => {
  console.log("server is listening on port 5000...");
});
