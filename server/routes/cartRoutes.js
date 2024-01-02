const express = require("express");
const { addToCart, getCartByUserId, deleteCart, updateCartQuantity, deleteAllCarts } = require("../controller/cartController");
const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/", getCartByUserId);
router.put("/:id", updateCartQuantity);
router.delete("/:id", deleteCart);
router.delete("/delete-all", deleteAllCarts);

module.exports = router;    