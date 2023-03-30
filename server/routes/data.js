const express = require("express");
const router = express.Router();
const Data = require("../models/dataSchema");

router.post("/data", async (req, resp) => {
  const {
    backdrop_path,
    genre_ids,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
  } = req.body;
  try {
    const data = await Data.insertMany({
      backdrop_path,
      genre_ids,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
    });

    if (!data) {
      resp.status(400).json({ error: "Something went wrong." });
    } else {
      resp.status(200).json(data);
    }
  } catch (e) {
    resp.status(500).json({ error: e.message });
  }
});

module.exports = router;
