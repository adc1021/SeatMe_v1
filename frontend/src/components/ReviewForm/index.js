import React, { useState } from "react";
import StarRating from "./StarRating"
import './ReviewForm.css'

const ReviewForm = ({ restaurantId, userId }) => {
  const [comment, setComment] = useState("")
  const [overall, setOverall] = useState(1)
  const [food, setFood] = useState(1)
  const [service, setService] = useState(1)
  const [ambience, setAmbience] = useState(1)


  return (
    <>
      <div className="review">
        <h3>Dined here recently? Leave a Review!</h3>
      </div>
        <div style={{marginTop: "15px"}}>
          <form>
            <textarea onChange={e => setComment(e.target.value)}></textarea>
            <StarRating />
            <StarRating />
            <StarRating />
            <StarRating />
          </form>
        </div>
    </>
  );
};

export default ReviewForm;
