import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
const RatingStar = ({ noOfStar = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMoveEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= hover || rating ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMoveEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default RatingStar;
