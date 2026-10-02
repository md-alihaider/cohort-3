import Movie from "../models/Movie.js";

export const getHighRatedMovies = async (req, res) => {
  const movies = await Movie.aggregate([
    { $match: { "imdb.rating": { $gte: 8 } } },
    { $sort: { "imdb.rating": -1 } },
    { $limit: 10 },
    { $project: { _id: 0, title: 1, year: 1, rating: "$imdb.rating" } }
  ]);
  res.json(movies);
};

export const getMoviesByGenre = async (req, res) => {
  const result = await Movie.aggregate([
    { $unwind: "$genres" },
    { $group: { _id: "$genres", movieCount: { $sum: 1 }, averageRating: { $avg: "$imdb.rating" } } },
    { $sort: { movieCount: -1 } }
  ]);
  res.json(result);
};

export const getMoviesByYear = async (req, res) => {
  const result = await Movie.aggregate([
    { $group: { _id: "$year", movieCount: { $sum: 1 }, averageRating: { $avg: "$imdb.rating" } } },
    { $sort: { _id: 1 } }
  ]);
  res.json(result);
};
