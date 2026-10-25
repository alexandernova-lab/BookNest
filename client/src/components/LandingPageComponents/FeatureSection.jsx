import React from "react";
import {
  BookOpen,
  TrendingUp,
  Image as ImageIcon,
  LayoutGrid,
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      title: "Organize your collection",
      description:
        "Sort books by category and keep your whole personal library in one tidy place.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      title: "Track reading progress",
      description:
        "Mark books as Want to Read, Currently Reading, or Completed, and see how far you are.",
    },
    {
      icon: <ImageIcon className="w-5 h-5 text-primary" />,
      title: "Upload book covers",
      description:
        "Add a cover to every book so your shelf looks as good as it feels.",
    },
    {
      icon: <LayoutGrid className="w-5 h-5 text-primary" />,
      title: "Manage your library",
      description:
        "Search, filter, edit, and remove books quickly as your collection grows.",
    },
  ];
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">
            Everything your shelf needs
          </h2>
          <p className="text-muted text-lg">
            Simple tools for readers who want their library organized, not
            complicated.
          </p>
        </div>

        {/* 4-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-card p-6 shadow-card flex flex-col items-start transition-all hover:border-border-strong"
            >
              {/* Icon Tile */}
              <div className="w-12 h-12 bg-primary-soft rounded-tile flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-medium text-ink text-lg mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
