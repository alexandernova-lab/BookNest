import React from "react";
import { Search, ChevronDown, Plus, Check, MoreHorizontal } from "lucide-react";
import { Link } from "react-router";

export default function LibraryPage() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      status: "Reading",
      statusBg: "bg-primary-soft",
      statusText: "text-primary-ink",
      coverBg: "bg-[#d9a036]",
      coverText: "text-[#2b2210]",
      progress: 65,
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      status: "Reading",
      statusBg: "bg-primary-soft",
      statusText: "text-primary-ink",
      coverBg: "bg-[#2b2e2b]",
      coverText: "text-[#f4f2ec]",
      progress: 40,
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      status: "Completed",
      statusBg: "bg-secondary",
      statusText: "text-secondary-ink",
      coverBg: "bg-[#c7d1c5]",
      coverText: "text-[#1e2e21]",
      progress: 100,
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "Reading",
      statusBg: "bg-primary-soft",
      statusText: "text-primary-ink",
      coverBg: "bg-[#b85233]",
      coverText: "text-[#fdf3f1]",
      progress: 15,
    },
  ];

  return (
    <main className="flex-1 bg-background p-10 overflow-y-auto">
      {/* Top Header Row (Notification Toast, Add Book Button, User Profile) */}
      <div className="flex items-center justify-between mb-8">
        {/* Success Toast Notification */}
        <div className="flex items-center gap-2 bg-ink text-surface px-4 py-2 rounded-control shadow-button text-ui">
          <Check className="w-4 h-4 text-[#61c454]" />
          <span>The Design of Everyday Things was added.</span>
        </div>

        {/* Actions & User Profile */}
        <div className="flex items-center gap-4">
          {/* Add a Book Button */}
          <Link
            to={"/create"}
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-surface text-ui font-medium px-4 py-2.5 rounded-control transition-colors shadow-button"
          >
            <Plus className="w-4 h-4" />
            <span>Add a Book</span>
          </Link>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-control shadow-sm cursor-pointer hover:border-border-strong transition-colors">
            <div className="w-6 h-6 rounded-full bg-primary text-surface flex items-center justify-center text-caption font-medium">
              A
            </div>
            <span className="text-ui font-medium text-ink">Alex</span>
            <ChevronDown className="w-4 h-4 text-muted" />
          </div>
        </div>
      </div>

      {/* Page Title & Count */}
      <div className="mb-8">
        <h1 className="font-display text-4xl text-ink mb-1">My Library</h1>
        <p className="text-muted text-ui">48 books in your collection</p>
      </div>

      {/* Filters and Search Bar Row */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {/* Search Input */}
        <div className="relative flex-1 min-w-65">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search titles or authors"
            className="w-full bg-surface border border-border text-ink text-ui pl-10 pr-4 py-2.5 rounded-control outline-none focus:border-border-strong transition-colors shadow-sm"
          />
        </div>

        {/* Status Filter Dropdown */}
        <div className="relative">
          <select className="bg-surface border border-border text-ink text-ui px-4 py-2.5 rounded-control outline-none appearance-none pr-10 cursor-pointer shadow-sm hover:border-border-strong transition-colors">
            <option>All statuses</option>
            <option>Reading</option>
            <option>Want to Read</option>
            <option>Completed</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
        </div>

        {/* Categories Filter Dropdown */}
        <div className="relative">
          <select className="bg-surface border border-border text-ink text-ui px-4 py-2.5 rounded-control outline-none appearance-none pr-10 cursor-pointer shadow-sm hover:border-border-strong transition-colors">
            <option>All categories</option>
            <option>Design</option>
            <option>Finance</option>
            <option>Habits</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
        </div>

        {/* Sort By Dropdown */}
        <div className="relative">
          <select className="bg-surface border border-border text-ink text-ui px-4 py-2.5 rounded-control outline-none appearance-none pr-10 cursor-pointer shadow-sm hover:border-border-strong transition-colors">
            <option>Recently Added</option>
            <option>Title (A-Z)</option>
            <option>Author (A-Z)</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-surface border border-border rounded-card p-4 shadow-card flex flex-col justify-between hover:border-border-strong transition-all group"
          >
            {/* Floating Book Cover Card */}
            <div
              className={`${book.coverBg} ${book.coverText} h-64 rounded-tile p-5 flex flex-col justify-between shadow-cover mb-4 transition-transform group-hover:-translate-y-1`}
            >
              <span className="font-display text-lg font-normal leading-snug max-w-[85%]">
                {book.title}
              </span>
              <span className="text-caption font-medium tracking-wider uppercase opacity-90">
                {book.author}
              </span>
            </div>

            {/* Book Info Footer */}
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-medium text-ink text-ui truncate max-w-42.5">
                    {book.title}
                  </h3>
                  <p className="text-muted text-caption truncate max-w-42.5">
                    {book.author}
                  </p>
                </div>
                <button className="text-muted hover:text-ink transition-colors p-1">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              {/* Status Badge & Progress Bar */}
              <div className="flex items-center justify-between mt-3">
                <span
                  className={`inline-block text-caption font-medium px-3 py-1 rounded-full ${book.statusBg} ${book.statusText}`}
                >
                  {book.status}
                </span>
              </div>

              {/* Progress Indicator line */}
              <div className="w-full bg-border h-1 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: `${book.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
