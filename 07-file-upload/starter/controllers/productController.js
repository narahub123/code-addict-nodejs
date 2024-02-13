const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

// create a product
const createProduct = async (req, res) => {
  res.send("Create product");
};

// get all the products
const getAllProducts = async (req, res) => {
  res.send("list of prducts");
};

module.exports = {
  createProduct,
  getAllProducts,
};
