import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import OverallStarRating from "./StarRating";
import ServiceStarRating from "./ServiceStarRating";
import AmbienceStarRating from "./AmbienceStarRating";
import FoodStarRating from "./FoodStarRating";
import "./ReviewForm.css";
import * as reviewActions from "../../store/reviewsReducer";

const NoUserReviewForm = ({ restaurantId, user }) => {


  return (
    <>
      <div className="review">
        <h3>Dined here recently? Leave a Review!</h3>
      </div>
      <div
        className="review"
        style={{ marginTop: "15px", marginBottom: "60px", padding: "15px" }}
      >
        <form className="review-form" >
          <textarea
            style={{ resize: "none", height: "200px", width: "575px" }}
            placeholder="YOU MUST BE SIGNED IN TO LEAVE A REVIEW"
          ></textarea>
          <div style={{display: "flex", justifyContent: "right"}}>
            <section></section>
          </div>
        </form>
      </div>
    </>
  );
};

export default NoUserReviewForm;
