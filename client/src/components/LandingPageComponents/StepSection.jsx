import React from "react";

const StepSection = () => {
  const steps = [
    {
      number: "1",
      title: "Create your account",
      description:
        "Sign up with your email in under a minute. No setup needed.",
    },
    {
      number: "2",
      title: "Add your books",
      description:
        "Enter the title and author, pick a status, and upload a cover.",
    },
    {
      number: "3",
      title: "Organize and track",
      description:
        "Group books by category and follow your progress from your dashboard.",
    },
  ];
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            Up and running in three steps
          </h2>
        </div>

        {/* 3-Column Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start">
              {/* Number Circle Badge */}
              <div className="w-12 h-12 bg-primary text-surface rounded-full flex items-center justify-center font-display text-lg mb-6 shadow-button">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-medium text-ink text-xl mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepSection;
