const Product = require("../models/productModel");

const getProduct = async (req, res) => {
  try {
    const product = await Product.find().sort({createdAt:-1});
    res.json({ message: "All products", error: false, success: true, data: product });
    console.log("get product", product)
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message, error: true, success: false });
      console.log("Error in get product", error)
  }
};

module.exports = getProduct;