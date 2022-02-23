import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMidddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// ROUTES
app.get("/", (req, res) => res.send("API is runnning!"));
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// MIDDLEWARES
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
);
