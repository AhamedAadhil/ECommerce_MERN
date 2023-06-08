import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import productRouter from "./Routes/product.routes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use("/api/products", productRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is Running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`
  );
});
