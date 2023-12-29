const express = require("express");
const { deleteImage } = require("../controller/cloudnaryConytroller");
const router = express.Router();

router.post("/", deleteImage);

module.exports = router;
