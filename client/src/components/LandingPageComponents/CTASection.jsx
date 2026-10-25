import React from "react";

const CTASection = () => {
  return (
    <section className="w-full bg-background py-16 px-6">
      <div className="max-w-page mx-auto">
        {/* Large Primary CTA Banner Card */}
        <div className="bg-primary rounded-(--radius-panel) py-20 px-8 text-center flex flex-col items-center justify-center shadow-overlay">
          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-surface max-w-3xl leading-tight mb-6">
            Start your personal library today
          </h2>

          {/* Subtitle */}
          <p className="text-surface/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Create a free account and add your first book in a minute.
          </p>

          {/* Action Button */}
          <button className="text-ui font-medium text-primary-ink bg-surface hover:bg-surface-hover px-8 py-4 rounded-control transition-colors shadow-button">
            Create Your Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
