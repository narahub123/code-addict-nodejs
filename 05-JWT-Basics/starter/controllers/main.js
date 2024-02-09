// import jwt package
const jwt = require("jsonwebtoken");

const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  // validation
  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  // just for demo, normally provided by DB!!
  const id = new Date().getDate();

  // create a new token - try to keep payload small, better exprience for user
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: `user created`, token });
};

const dashboard = async (req, res) => {
  // console.log(req.headers);
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  // get the token
  const token = authHeader.split(" ")[1];

  // verification
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log(decoded);

    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("Not authrozied to access this route", 401);
  }

  //console.log(token);
};

module.exports = {
  login,
  dashboard,
};
