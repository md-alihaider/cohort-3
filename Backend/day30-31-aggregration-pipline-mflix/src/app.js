import express from "express";
import aggregationRoutes from "./routes/aggregation.routes.js";

const app = express();

app.use(express.json());
app.use("/api/aggregation", aggregationRoutes);

export default app;
