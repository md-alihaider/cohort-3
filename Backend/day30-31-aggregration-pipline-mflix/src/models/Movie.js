import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  rated: String,
  awards: mongoose.Schema.Types.Mixed,
  lastupdated: String,
  year: Number,
  imdb: mongoose.Schema.Types.Mixed,
  countries: [String],
  type: String,
  tomatoes: mongoose.Schema.Types.Mixed,
  num_mflix_comments: Number
});

export default mongoose.model("Movie", movieSchema);
