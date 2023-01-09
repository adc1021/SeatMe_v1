import { useState } from "react";


const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0)

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        return (
          <button
          key={index}
          id="rating-buttons"
          className={index <= (hover || rating) ? "on" : "off"}
          onClick={() => setRating(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}>
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
