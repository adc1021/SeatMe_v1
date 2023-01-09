import React, { useState } from "react";
import './ReviewForm.css'

const ReviewForm = ({ restaurantId, userId }) => {
  const [comment, setComment] = useState("")

  return (
    <>
      <div className="review">
        <h3>Dined here recently? Leave a Review!</h3>
      </div>
        <div style={{marginTop: "15px"}}>
          <form>
            <textarea onChange={e => setComment(e.target.value)}></textarea>
            
          </form>
        </div>
    </>
  );
};

export default ReviewForm;
