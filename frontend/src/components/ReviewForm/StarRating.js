import { useState } from "react";
import ReviewForm from "./ReviewForm";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        return (
          <button
          key={index}
          id="rating-buttons"
          className={index <= rating ? "on" : "off"}
          onClick={() => setRating(index)}>
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
