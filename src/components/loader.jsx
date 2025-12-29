import React from "react";
import "./GlowLoader.css";

const GlowLoader = () => {
  return (
    <div className="loader-wrapper">
      <div className="glow-ring"></div>
      <p className="loader-text">Loading vibes...</p>
    </div>
  );
};

export default GlowLoader;