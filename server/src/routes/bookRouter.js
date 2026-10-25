import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  update,
} from "../controllers/bookController.js";
import { protect } from "../middlewares/auth.js";
import { createBookValidator } from "../validators/bookValidators.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const router = Router();

router.post(
  "/create",
  protect,
  createBookValidator,
  validateRequest,
  createBook,
);

router.get("/", getBooks);
router.get("/:id", getBook);

router.patch("/:id", update);
router.delete("/:id", deleteBook);

export default router;
