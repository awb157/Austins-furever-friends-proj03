import React from "react";
import "../components/Dogs.css";
import DogCards from "../components/DogCards";

const Dogs = () => {
  return (
    <div className="dogcard-section">
      <DogCards />
      <div className="dogcard-text-container">
        {/* <h1 className="dogcard-title">DOGS</h1>
          <p className="dogcard-text"></p> */}
      </div>
    </div>
  );
};

export default Dogs;
