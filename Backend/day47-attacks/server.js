import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  limit: 5, // Limit each IP to 5 requests per `window` (here, per 1 minutes)
  message: {
    message:
      "Too many login attempts from this IP, please try again after a minute",
  },
});

app.get("/api/login", loginLimiter, (req, res) => {
  res.send("Login endpoint");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
