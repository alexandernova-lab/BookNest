import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userControllers.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/userValidators.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const router = Router();

router.post("/register", registerValidator, validateRequest, registerUser);
router.post("/login", loginValidator, validateRequest, loginUser);
router.post("/logout", logoutUser);

export default router;
