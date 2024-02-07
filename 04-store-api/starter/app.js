// set up for connecting database
require("dotenv").config();

// asynce errors
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// middleware
const NotFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes
// home route
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", productsRouter);

// products route

app.use(NotFoundMiddleware);
app.use(errorMiddleware);

// connection to db
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {}
};

start();
