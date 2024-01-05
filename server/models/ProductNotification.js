const mongoose = require("mongoose");

const ProductNotificationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: false,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    atttribute: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// module.exports = ReviewSchema;

const ProductNotification = mongoose.model(
  "ProductNotification",
  ProductNotificationSchema
);
module.exports = ProductNotification;
