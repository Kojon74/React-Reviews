import React from "react";
import { Icon } from "semantic-ui-react";
import "./Review.css";

const Review = ({ id, img, name, occupation, info }) => {
  return (
    <div className="review">
      <div className="quote-img-container">
        <div className="quote-container">
          <Icon inverted className="quote" name="quote right" />
        </div>
        <div className="img-container">
          <img src={img} alt="img" />
        </div>
      </div>
      <h3 className="name">{name}</h3>
      <h3 className="occupation">{occupation}</h3>
      <p className="info">{info}</p>
    </div>
  );
};

export default Review;
