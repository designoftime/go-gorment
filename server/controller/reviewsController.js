const Reviews = require("../models/Reviews");

const addReviews = async (req, res) => {
  try {
    const reviewData = new Reviews(req.body);
    await reviewData.save();
    res.status(201).send({
      message: "success",
    });
  } catch (err) {
    res.status(500).send({
      message: `solve the internal ${err}`,
    });
  }
};
const updateReviews = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return new Error("Id Not found");
    const dataR = req.body;
    const reviewData = {
      rating: dataR.rating,
      reviewTitle: dataR.reviewTitle,
      review: dataR.reviewTitle,
    };
    const data = await Reviews.findByIdAndUpdate(id, reviewData, { new: true });
    res.status(201).send({
      message: "succes",
      data,
    });
  } catch (err) {
    res.status(500).send({
      message: `solve the internal ${err}`,
    });
  }
};

const deleteReviews = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return new Error("Id Not found");
    await Reviews.deleteOne({ _id: id });
    res.status(201).send({
      message: "succes",
    });
  } catch (err) {
    res.status(500).send({
      message: `solve the internal ${err}`,
    });
  }
};

const getAllReview = async (req, res) => {
  try {
    const data = await Reviews.find()
      .sort({ updatedAt: -1 })
      .populate({ path: "productId", select: "image title description prices" })
      .populate({ path: "user", select: "name image" });
    const totalReviews = await Reviews.find().count();
    const fiveStar = await Reviews.find({ rating: 5 }).count();
    const fourStar = await Reviews.find({ rating: 4 }).count();
    const threeStar = await Reviews.find({ rating: 3 }).count();
    const twoStar = await Reviews.find({ rating: 2 }).count();
    const oneStar = await Reviews.find({ rating: 1 }).count();
    res.status(200).send({
      message: "seccess",
      totalReviews,
      fiveStar,
      fourStar,
      threeStar,
      twoStar,
      oneStar,
      data,
    });
  } catch (err) {
    res.status(500).send({
      message: `solve the internal ${err}`,
    });
  }
};

module.exports = {
  addReviews,
  updateReviews,
  deleteReviews,
  getAllReview,
};
