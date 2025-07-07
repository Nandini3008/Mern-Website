import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js"; // Import product routes
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/products", productRoutes); // Use product routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
