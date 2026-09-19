import app from "./app/app.js";
import { config } from "./config/config.js";
import { connectDB } from "./config/db.js";

const PORT = config.PORT || 4000;

await connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
