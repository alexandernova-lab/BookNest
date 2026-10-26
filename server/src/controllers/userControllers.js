import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exited with this email");
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // Create User
    // const user = {
    //   name,
    //   email,
    //   password: hashPassword,
    // };
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    if (!user) {
      throw new Error("Register Failed");
    }

    return res.status(201).json({ message: "Register Success", user });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new Error("User not found");
    }

    // Compare
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      throw new Error("Invalid Credentials");
    }
    // Create Token and Set Cookie
    const token = generateToken(existingUser._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .json({ message: "User login success", existingUser });
  } catch (error) {
    res.clearCookie("jwt");
    return res.status(400).json(error.message);
  }
};

export const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.status(200).json({ message: "User logout success" });
};

export const me = async (req, res) => {
  return res.status(200).json({ message: "User me ", user: req.user });
};
