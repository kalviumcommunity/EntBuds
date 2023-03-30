const mongoose = require("mongoose");
const float = require("mongoose-float").loadType(mongoose);
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  backdrop_path: { type: String, required: true },
  genre_ids: { type: String, required: true },
  original_language: { type: String, required: true },
  original_title: { type: String, required: true },
  overview: { type: String, required: true },
  popularity: { type: float, required: true },
  poster_path: { type: String, required: true },
  release_date: { type: String, required: true },
  title: { type: String, required: true },
  vote_average: { type: float, required: true },
});

module.exports = mongoose.model("Data", DataSchema);
