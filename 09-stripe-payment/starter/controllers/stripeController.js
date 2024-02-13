const stripeController = async (req, res) => {
  console.log(req.body);
  res.send("stripe route");
};

module.exports = stripeController;
