import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URL, { serverSelectionTimeoutMS: 20000 })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
