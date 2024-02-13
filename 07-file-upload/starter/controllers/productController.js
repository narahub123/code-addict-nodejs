const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

// create a product
const createProduct = async (req, res) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

// get all the products
const getAllProducts = async (req, res) => {
  res.send("list of prducts");
};

module.exports = {
  createProduct,
  getAllProducts,
};
