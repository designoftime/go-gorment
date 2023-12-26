const express = require("express");
const { addToCart, getCartByUserId, deleteCart, updateCartQuantity } = require("../controller/cartController");
const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/", getCartByUserId);
router.put("/:id", updateCartQuantity);
router.delete("/:id", deleteCart);

module.exports = router;