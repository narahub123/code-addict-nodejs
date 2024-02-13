const { StatusCodes } = require("http-status-codes");

// upload a product image
const uploadProductImage = async (req, res) => {
  res.send("upload product image");
};

module.exports = {
  uploadProductImage,
};
