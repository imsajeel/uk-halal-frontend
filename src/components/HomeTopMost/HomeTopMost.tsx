import React from "react";
import "./HomeTopMost.css";

const HomeTopMost = () => {
  return (
    <div className="flex-center">
      <div className="home-top-most-content max-width-custom">
        <div className="offers">
          <div className="imgBox">
            <img
              src="./images/home-banners/bundle-offers.jpg"
              alt="bundle-offers"
            />
          </div>
          <div className="imgBox">
            <img src="./images/home-banners/meat.jpg" alt="meat" />
          </div>
        </div>
        <div className="imgBox carosel">
          <img
            style={{ width: "100%" }}
            src="./images/home-banners/vegetables.jpg"
            alt="vegetables"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTopMost;
