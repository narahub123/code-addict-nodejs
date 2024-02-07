require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

// connect to the database
// use the model to automatically add those json products
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // delete all the products
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success!!");
    // process exit
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
