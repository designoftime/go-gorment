const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    address1: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    pincode: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    subscriptionType: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: false,
        },
        attribute: {
          type: String,
          required: false,
        },
        subscription_duration: {
          type: String,
          required: false,
        },
        subscription_price: {
          type: String,
          required: false,
        },
        quantity: {
          type: String,
          required: false,
        },
        status: {
          type: String,
          enum: ["Active", "Inactive"],
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
