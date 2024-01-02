const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  carts: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      attributeId: {
        type: Array,
        required: false,
      },
      title: {
        type: String,
        required: true,
      },
      attribute: {
        type: String,
        required: false,
      },
      subscription: {
        type: String,
        required: false,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
        enum: ["Pending", "Success"],
        default: "Pending",
      },
      OrderDate: {
        type: String,
        required: true,
        default: new Date(),
      },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
