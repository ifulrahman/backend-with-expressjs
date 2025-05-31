import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import db from "./config/Database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(PostRoute);

try {
  await db.authenticate();
  console.log('Database connected...');
  await db.sync(); // Ini buat nyinkronin model ke database
} catch (error) {
  console.error('Database connection error:', error);
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
