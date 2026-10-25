import React from "react";
import ProjectImage from "../../assets/project.png";

const ImageSection = () => {
  return (
    <div className="w-full overflow-hidden rounded-card shadow-card">
      <img
        src={ProjectImage}
        alt="Project preview"
        className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>
  );
};

export default ImageSection;
