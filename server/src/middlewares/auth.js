import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const protect = async (req, res, next) => {
  // Get Token from cookie
  const token = req.cookies.jwt;

  // Verify Token
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedValue) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized" });
      } else {
        const user = await User.findById(decodedValue._id);
        req.user = user;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Token need to provide" });
  }
};
