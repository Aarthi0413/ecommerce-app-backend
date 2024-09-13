const mongoose = require('mongoose');


//This schema is for storing product details and their categorization.
const addToCartSchema = new mongoose.Schema({
  productId: {
    ref:'Product',
    type: mongoose.Schema.Types.ObjectId
  },
  quantity: Number,
  userId: String,
}, {timestamps: true});

const AddToCart = mongoose.model('addToCart', addToCartSchema);

module.exports = AddToCart;
