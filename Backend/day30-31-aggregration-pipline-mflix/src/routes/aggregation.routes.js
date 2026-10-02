import { Router } from "express";
import {
  getHighRatedMovies,
  getMoviesByGenre,
  getMoviesByYear
} from "../controllers/aggregation.controller.js";

const router = Router();

router.get("/high-rated", getHighRatedMovies);
router.get("/by-genre", getMoviesByGenre);
router.get("/by-year", getMoviesByYear);

export default router;
