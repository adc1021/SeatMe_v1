import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import OverallStarRating from "./StarRating"
import ServiceStarRating from "./ServiceStarRating"
import AmbienceStarRating from "./AmbienceStarRating";
import FoodStarRating from "./FoodStarRating"
import './ReviewForm.css'
import * as reviewActions from "../../store/reviewsReducer"

const ReviewForm = ({ restaurantId, userId }) => {
  const [comment, setComment] = useState("")
  const [overall, setOverall] = useState(1)
  const [food, setFood] = useState(1)
  const [service, setService] = useState(1)
  const [ambience, setAmbience] = useState(1)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewActions.createReview({
      restaurantId: restaurantId,
      userId: userId,
      comment: comment,
      overallRating: overall,
      foodRating: food,
      serviceRating: service,
      ambienceRating: ambience
    }))
  }

  return (
    <>
      <div className="review">
        <h3>Dined here recently? Leave a Review!</h3>
      </div>
        <div className="review" style={{marginTop: "15px", marginBottom: "60px", padding: "15px"}}>
          <form onSubmit={handleSubmit}>
            <textarea onChange={e => setComment(e.target.value)}></textarea>
            <OverallStarRating setOverall={setOverall}/>
            <FoodStarRating setFood={setFood}/>
            <AmbienceStarRating setAmbience={setAmbience} />
            <ServiceStarRating setService={setService}/>
            <button type="submit" disabled={!comment }>POST</button>
          </form>
        </div>
    </>
  );
};

export default ReviewForm;
