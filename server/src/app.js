import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/dbConnect.js";
import userRoutes from "./routes/userRotuer.js";
import cookieParser from "cookie-parser";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(json());
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
