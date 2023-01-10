import { useState } from "react";

const FoodStarRating = ({ setFood }) => {
  const [rating, setRating] = useState(1);


  const handleClick = (e, index) => {
    e.preventDefault();

    setRating(index + 1);
    setFood(rating);
  };

  return (
    <div className="rating-logo">
      <div>
        <p>Food Rating</p>
      </div>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          return (
            <button
              key={index}
              id="rating-buttons"
              className={index + 1 <= rating ? "on" : "off"}
              onClick={(e) => handleClick(e, index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FoodStarRating;
