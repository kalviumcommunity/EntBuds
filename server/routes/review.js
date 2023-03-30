const express = require("express");
const router = express.Router();
const Review = require("../models/reviewSchema");

router.get("/review/:title", async (req, resp) => {
  const { title } = req.params;

  try {
    const review = await Review.findOne({ title });

    if (!review) {
      resp.status(200).json({ exist: false });
    } else {
      resp.status(200).json({ exist: true, out: review });
    }
  } catch (e) {
    resp.status(500).json({ error: e.message });
  }
});

router.post("/review", async (req, resp) => {
  const { title, reviews } = req.body;

  try {
    const review = await Review.create({
      title,
      reviews
    });
    if (!review) {
      return resp.status(400).json(review);
    } else {
      return resp.status(200).json(review);
    }
  } catch (e) {
    return resp.status(200).json({ error: e.message });
  }
});

router.put("/review", async (req, resp) => {
  const { title, reviews } = req.body;

  try {
    const review = await Review.findOneAndUpdate(
      {title},
      { $push: { reviews: reviews } },
      { new: true }
    );
    if (!review) {
      resp.status(400).json(review);
    } else {
      resp.status(200).json(review);
    }
  } catch (e) {
    resp.status(500).json({ error: e.message });
  }
});
module.exports = router;
