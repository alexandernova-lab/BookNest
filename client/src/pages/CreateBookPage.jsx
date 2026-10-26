import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Star,
  Upload,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router";

export default function AddBookForm() {
  const [readingStatus, setReadingStatus] = useState("Want to Read");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="w-full bg-background min-h-screen p-8 lg:p-12">
      <div className="max-w-page mx-auto">
        {/* Back Link */}
        <Link
          to={"/library"}
          className="flex items-center gap-2 text-primary font-medium text-ui hover:text-primary-hover transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to My Library</span>
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-display text-4xl lg:text-5xl text-ink mb-2">
            Add a Book
          </h1>
          <p className="text-muted text-ui">Add a book to your library.</p>
        </div>

        {/* Form Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left / Main Details Card (Spans 2 Columns) */}
          <div className="lg:col-span-2 bg-surface border border-border rounded-card p-6 lg:p-8 shadow-card space-y-6">
            {/* Book Title Field (With Validation Error State) */}
            <div>
              <label className="block text-ui font-medium text-ink mb-1.5">
                Book title *
              </label>
              <input
                type="text"
                placeholder="e.g. Atomic Habits"
                className="w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border border-error focus:outline-none focus:ring-1 focus:ring-error transition-colors"
              />
              <div className="flex items-center gap-1.5 mt-2 text-error text-caption">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Add a title to save this book.</span>
              </div>
            </div>

            {/* Author & Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Author Field */}
              <div>
                <label className="block text-ui font-medium text-ink mb-1.5">
                  Author *
                </label>
                <input
                  type="text"
                  placeholder="e.g. James Clear"
                  className="w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border border-border-strong focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Category Select Dropdown */}
              <div>
                <label className="block text-ui font-medium text-ink mb-1.5">
                  Category
                </label>
                <div className="relative">
                  <select className="w-full bg-surface text-ink text-ui px-4 py-3 rounded-control border border-border-strong focus:border-primary focus:outline-none appearance-none pr-10 cursor-pointer transition-colors">
                    <option value="">Select a category</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Finance">Finance</option>
                    <option value="Design">Design</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Reading Status Pill Selector */}
            <div>
              <label className="block text-ui font-medium text-ink mb-2">
                Reading status
              </label>
              <div className="flex flex-wrap gap-3">
                {["Want to Read", "Currently Reading", "Completed"].map(
                  (status) => {
                    const isSelected = readingStatus === status;
                    return (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setReadingStatus(status)}
                        className={`text-ui px-5 py-2.5 rounded-full border transition-all ${
                          isSelected
                            ? "bg-primary-soft text-primary-ink border-primary font-medium"
                            : "bg-surface text-ink border-border-strong hover:bg-surface-hover"
                        }`}
                      >
                        {status}
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {/* Rating Selector */}
            <div>
              <label className="block text-ui font-medium text-ink mb-2">
                Rating{" "}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-muted hover:text-ink transition-colors p-0.5"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= (hoverRating || rating)
                          ? "fill-ink text-ink"
                          : "text-border-strong"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-ui font-medium text-ink mb-1.5">
                Description
              </label>
              <textarea
                rows={5}
                placeholder="Write a brief overview of the book..."
                className="w-full bg-surface text-ink text-ui p-4 rounded-control border border-border-strong focus:border-primary focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>

          {/* Right Column - Cover Image Upload Card */}
          <div className="bg-surface border border-border rounded-card p-6 lg:p-8 shadow-card h-fit space-y-4">
            <h2 className="font-display text-2xl text-ink">Cover image</h2>

            {/* Drag & Drop Area */}
            <div className="border-2 border-dashed border-error-soft bg-error-soft/30 rounded-control p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center mb-3">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-ui font-medium text-ink mb-1">
                Drag an image here, or browse
              </p>
              <p className="text-caption text-muted mb-4">
                JPG, PNG or WebP, up to 5 MB
              </p>
              <button
                type="button"
                className="bg-surface text-ink border border-border-strong hover:bg-surface-hover text-ui font-medium px-5 py-2 rounded-control shadow-button transition-colors"
              >
                Choose file
              </button>
            </div>

            {/* File Upload Size Error Message */}
            <div className="flex items-start gap-1.5 text-error text-caption">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>That file is 8.2 MB. Choose an image under 5 MB.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            className="text-ui font-medium text-ink bg-surface hover:bg-surface-hover border border-border-strong px-6 py-3 rounded-control transition-colors shadow-button"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-ui font-medium text-surface bg-primary hover:bg-primary-hover px-6 py-3 rounded-control transition-colors shadow-button"
          >
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
}
