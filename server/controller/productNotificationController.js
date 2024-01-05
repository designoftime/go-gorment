const ProductNotification = require("../models/ProductNotification");

const addProductNotification = async (req, res) => {
  try {
    const productData = new ProductNotification(req.body);
    await productData.save();
    res.send(productData);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const getAllProductNotification = async (req, res) => {
  try {
    const productData = await ProductNotification.find()
      .populate({ path: "product", select: "title description image prices" })
      .populate({ path: "user", select: "_id email name" });
    res.send(productData);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addProductNotification,
  getAllProductNotification,
};
