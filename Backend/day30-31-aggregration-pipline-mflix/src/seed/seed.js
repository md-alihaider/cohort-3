import "dotenv/config";
import fs from "fs/promises";
import mongoose from "mongoose";
import { EJSON } from "bson";

import { connectDB } from "../config/db.js";
import Movie from "../models/Movie.js";

const seed = async () => {
  try {
    await connectDB();

    const file = await fs.readFile(
      new URL("./data/movies.data.json", import.meta.url),
      "utf8",
    );

    const movies = EJSON.parse(file);

    const cleanedMovies = movies.map((movie) => {
      if (typeof movie.year === "string") {
        const match = movie.year.match(/\d{4}/);

        movie.year = match ? Number(match[0]) : null;
      }

      return movie;
    });

    await Movie.deleteMany({});

    await Movie.insertMany(cleanedMovies);

    console.log(`Seeded ${cleanedMovies.length} movies`);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
};

seed();
