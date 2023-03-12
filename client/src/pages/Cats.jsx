import React from "react";
import "../components/Cats.css";
import CatCards from "../components/CatCards";

const Cats = () => {
  return (
    <div className="catcard-section">
      <CatCards />
      <div className="catcard-text-container">
        {/* <h1 className="catcard-title">CATS</h1>
          <p className="catcard-text"></p> */}
      </div>
    </div>
  );
};

export default Cats;
