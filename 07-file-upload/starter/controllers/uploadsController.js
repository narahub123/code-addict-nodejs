const path = require("path");

const { StatusCodes } = require("http-status-codes");

const CustomError = require("../errors");

const cloudinary = require("cloudinary").v2;

const fs = require("fs");
// using local folder
const uploadProductImageLocal = async (req, res) => {
  console.log(req.files);
  // check if file exists
  if (!req.files) {
    throw new CustomError.BadRequestError("No file Upload");
  }
  // upload a product image
  let productImage = req.files.image;
  // check format
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Upload Image");
  }

  // check size
  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      "Please upload image smaller than 1KB"
    );
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
  res.send("upload product image");
};

const uploadProductImage = async (req, res) => {
  console.log(req.files.image);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  // once we're done with cloudinary, remove temp files
  fs.unlinkSync(req.files.image.tempFilePath);
  // console.log(result);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = {
  uploadProductImage,
};
