const express = require("express");
const router = express.Router();
const {
  getAllProductNotification,
  addProductNotification,
} = require("../controller/productNotificationController");

//add a product
router.post("/add", addProductNotification);
router.get("/", getAllProductNotification);

module.exports = router;
