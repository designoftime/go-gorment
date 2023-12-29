const express = require("express");
const router = express.Router();
// import cloudinary from "cloudinary/lib/cloudinary";

// cloudinary?.config({
//   cloud_name: import.meta.env.VITE_APP_CLOUD_NAME,
//   api_key: import.meta.env.VITE_APP_CLOUDINARY_API_KEY,
//   api_secret: import.meta.env.VITE_APP_CLOUDINARY_API_SECRET,
// });


router.delete("/:imgUrl", async (req, res) => {
  let img = req.params.imgUrl;
  console.log(img)
//   cloudinary.v2.api
//         .delete_resources(["samples/shoe"], {
//           type: "upload",
//           resource_type: "image",
//         })
//         .then(console.log);
});


module.exports = router;
