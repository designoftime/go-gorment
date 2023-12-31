const express = require("express");
const router = express.Router();
const {
  addReviews,
  updateReviews,
  deleteReviews,
  getAllReview,
  getReviewById,
  getReviewByProductId,
} = require("../controller/reviewsController");

//add a Theme
router.post("/add", addReviews);
router.put("/:id", updateReviews);
router.delete("/:id", deleteReviews);
router.get("/all", getAllReview);
router.get("/:id", getReviewById);
router.get("/by-product/:id", getReviewByProductId);

module.exports = router;
