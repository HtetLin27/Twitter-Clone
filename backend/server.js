import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log("Server is listening on port : ", PORT);
  connectMongoDB();
});
