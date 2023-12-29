const cloudinary = require("cloudinary").v2;

cloudinary?.config({
  cloud_name: process.env.VITE_APP_CLOUD_NAME,
  api_key: process.env.VITE_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_APP_CLOUDINARY_API_SECRET,
});

const deleteImage = async (req, res) => {
  try {
    let img = req.body.imgUrl;
    if (!img) throw new Error("img not found");
    const deleteData = await cloudinary.uploader.destroy(img, {
      resource_type: "image",
      invalidate: true,
      type: "upload",
    });
    res.status(201).send({
      message: "success",
      deleteData,
    });
  } catch (err) {
    res.status(201).send({
      message: "solve the internal err" + err,
    });
  }
};

module.exports = {
  deleteImage,
};
