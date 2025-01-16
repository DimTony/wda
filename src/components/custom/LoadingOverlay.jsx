import React from "react";
import "./LoadingOverlay.css";

const LoadingOverlay = () => {
  return (
    <div className="loading-screen">
      <img
        src="/icons/wda-fav-color.svg"
        alt="Loading"
        className="spinning-image"
      />
    </div>
  );
};

export default LoadingOverlay;
