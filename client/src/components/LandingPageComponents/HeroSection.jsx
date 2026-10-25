import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-background py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-block bg-primary-soft text-primary-ink text-caption font-medium px-4 py-1.5 rounded-full mb-8">
          A personal library for readers
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight mb-6 max-w-3xl">
          Your books, beautifully kept.
        </h1>

        {/* Subtitle / Description */}
        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
          BookNest helps you organize your collection, track what you are
          reading, and give every book its cover, all in one calm place.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button className="text-ui font-medium text-surface bg-primary hover:bg-primary-hover px-7 py-3.5 rounded-control transition-colors shadow-button">
            Get Started
          </button>

          {/* Secondary / Outline CTA */}
          <button className="text-ui font-medium text-ink bg-surface hover:bg-surface-hover border border-border-strong px-7 py-3.5 rounded-control transition-colors shadow-button">
            Explore Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
