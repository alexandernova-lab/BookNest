import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header className="w-full bg-background border-b border-border py-4 px-6">
      <div className="max-w-page mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Logo Icon Tile */}
          <div className="flex items-center justify-center w-10 h-10 bg-primary text-surface rounded-tile">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          {/* Logo Text */}
          <span className="font-display text-2xl font-normal text-ink">
            BookNest
          </span>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-6">
          {/* Nav Item */}
          <a
            href="#features"
            className="text-ui font-medium text-muted hover:text-ink transition-colors"
          >
            Features
          </a>

          {/* Log In Button (Outline) */}
          <Link
            to={"/login"}
            className="text-ui font-medium text-ink bg-surface hover:bg-surface-hover border border-border-strong px-5 py-2.5 rounded-control transition-colors shadow-button"
          >
            Log In
          </Link>

          {/* Get Started Button (Solid Primary) */}
          <Link
            to={"/register"}
            className="text-ui font-medium text-surface bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-control transition-colors shadow-button"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
