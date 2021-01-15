import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import Review from "./Review";
import { data } from "../data";
import "./CenterComponent.css";

const CenterComponent = () => {
  const [reviewCounter, setReviewCounter] = useState(0);
  const [review, setReview] = useState(data[0]);
  const lenData = data.length;

  const nextPrevReview = (increment) => {
    let newReviewCounter = (reviewCounter + increment) % lenData;
    newReviewCounter =
      newReviewCounter >= 0 ? newReviewCounter : lenData + newReviewCounter;
    setReviewCounter(newReviewCounter);
    console.log(Math.abs(newReviewCounter));
    setReview(data[newReviewCounter]);
  };

  const setRandomReview = () => {
    const randNum = Math.floor(Math.random() * Math.floor(lenData));
    setReviewCounter(randNum);
    setReview(data[randNum]);
  };

  return (
    <div className="center-component">
      <h1 className="title">
        Our Reviews
        <div className="underline" />
      </h1>
      <div className="review-container">
        <Review {...review} />
        <div className="arrows">
          <Button
            inverted
            icon
            className="left-arrow"
            color="blue"
            onClick={() => nextPrevReview(-1)}
          >
            <Icon name="angle left" />
          </Button>
          <Button
            inverted
            icon
            className="right-arrow"
            color="blue"
            onClick={() => nextPrevReview(1)}
          >
            <Icon name="angle right" />
          </Button>
        </div>
        <Button
          basic
          className="surprise-me"
          color="blue"
          //   style={{ display: "block", margin: "auto" }}
          onClick={setRandomReview}
        >
          Surprise Me
        </Button>
      </div>
    </div>
  );
};

export default CenterComponent;
