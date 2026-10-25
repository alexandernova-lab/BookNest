import { body } from "express-validator";

export const createBookValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 150 })
    .withMessage("Title cannot exceed 150 characters."),

  body("author")
    .trim()
    .notEmpty()
    .withMessage("Author is required.")
    .isLength({ max: 100 })
    .withMessage("Author cannot exceed 100 characters."),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required.")
    .isLength({ max: 2000 })
    .withMessage("Description cannot exceed 2000 characters."),

  body("categories")
    .isArray({ min: 1 })
    .withMessage("At least one category is required."),

  body("categories.*")
    .trim()
    .notEmpty()
    .withMessage("Category cannot be empty.")
    .isLength({ max: 50 })
    .withMessage("Category cannot exceed 50 characters."),

  body("cover")
    .trim()
    .notEmpty()
    .withMessage("Cover image is required.")
    .isURL()
    .withMessage("Cover must be a valid URL."),
];
