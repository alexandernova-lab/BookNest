import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/dbConnect.js";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(json());


// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
