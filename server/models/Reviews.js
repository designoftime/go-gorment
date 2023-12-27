const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviewTitle: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: false,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    imgUrl: {
      type: String,
      required: false,
    },
    emailStatus: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// module.exports = ReviewSchema;

const Reviews = mongoose.model("Reviews", ReviewsSchema);
module.exports = Reviews;
