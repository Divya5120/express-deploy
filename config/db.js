import mongoose from "mongoose";

export const connectDB = async () => {
  const MANGODB_URI =
    "mongodb+srv://divyasaipriya:divya5120@cluster0.oct1s.mongodb.net/express";

  await mongoose.connect(MANGODB_URI).then(() => {
    console.log("Database connected");
  });
};
