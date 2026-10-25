import React from "react";
import { Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background pt-10 pb-8 px-6">
      <div className="max-w-page mx-auto flex items-center justify-between gap-10">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          {/* Green icon tile with Lucide Book Icon */}
          <div className="w-10 h-10 rounded-tile bg-primary text-surface flex items-center justify-center">
            <Book className="w-5 h-5" />
          </div>
          {/* Brand Name with Serif Font */}
          <span className="font-display text-2xl text-ink">BookNest</span>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex-1 flex items-center justify-center gap-10">
          <a
            href="#features"
            className="text-ui text-ink font-medium hover:text-primary-hover transition-colors"
          >
            Features
          </a>
          <a
            href="#login"
            className="text-ui text-ink font-medium hover:text-primary-hover transition-colors"
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="text-ui text-ink font-medium hover:text-primary-hover transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Copyright Text */}
        <p className="text-caption text-muted text-right">
          © 2026 BookNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
