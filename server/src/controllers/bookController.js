import mongoose from "mongoose";
import { Book } from "../models/book.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, description, categories, cover } = req.body;

    const book = await Book.create({
      title,
      author,
      description,
      categories,
      cover,
      publishBy: req.user._id,
    });
    if (!book) {
      throw new Error("Book creation failed");
    }
    res.status(201).json({ message: "Book created successfully", book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    if (!books) {
      throw new Error("No Books found");
    }
    res.status(200).json({ books });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      throw new Error("Book not found");
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, description, categories, cover } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid id");
    }

    const book = await Book.findByIdAndUpdate(
      id,
      {
        title,
        author,
        description,
        categories,
        cover,
      },
      { new: true },
    );
    if (!book) {
      throw new Error("Update failed");
    }
    res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid id");
    }
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
