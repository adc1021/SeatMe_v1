import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as reviewActions from "../../store/reviewsReducer";

const RestOverviewheader = ({ restaurant }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewActions.fetchReviews(restaurant.id));
  }, [dispatch, restaurant]);

  const reviews = useSelector((state) => {
    // debugger
    return state.reviews.reviews ? Object.values(state.reviews.reviews) : [];
  });

  const stars = () => {
    // debugger
    if (restaurant.averageRating >= 5.0) {
      return (
        <div className="star-wrapper small">
          <div className="star-svg-wrapper">
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
          </div>
        </div>
      );
    } else if (
      restaurant.averageRating > 4.5 &&
      restaurant.averageRating <= 4.9
    ) {
      return (
        <div className="star-wrapper small">
          <div className="star-svg-wrapper">
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-three-quarters-red"></div>
          </div>
        </div>
      );
    } else if (restaurant.averageRating === 4.5) {
      return (
        <div className="star-wrapper small">
          <div className="star-svg-wrapper">
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-half-red"></div>
          </div>
        </div>
      );
    } else if (
      restaurant.averageRating > 4.2 &&
      restaurant.averageRating < 4.5
    ) {
      return (
        <div className="star-wrapper small">
          <div className="star-svg-wrapper">
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-quarter-red"></div>
          </div>
        </div>
      );
    } else if (
      restaurant.averageRating < 4.2 &&
      restaurant.averageRating >= 4.0
    ) {
      return (
        <div className="star-wrapper small">
          <div className="star-svg-wrapper">
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-full-red"></div>
            <div className="star-svg star-empty-red"></div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="overview-header-wrapper">
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          {stars()}
          <div id="rating-display">
          {restaurant.averageRating}
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <span style={{marginRight: "4px", marginTop: "4px"}}>
            <svg>
              <g style={{lineHeight: "1"}}>
                <path d="M19,4 L5,4 C3.8954305,4 3,4.8954305 3,6 L3,15
                C3,16.1045695 3.8954305,17 5,17 L11,17 L15.36,20.63
                C15.6583354,20.8784924 16.0735425,20.9318337 16.4250008,20.7668198
                C16.776459,20.6018059 17.0006314,20.2482681 17,19.86 L17,17 L19,17
                C20.1045695,17 21,16.1045695 21,15 L21,6 C21,4.8954305 20.1045695,4
                19,4 Z M19,15 L15,15 L15,17.73 L11.72,15 L5,15 L5,6 L19,6 L19,15 Z"
                fill="#2D333F" fillRule="nonzero">
                </path>
              </g>
            </svg>
          </span>
          <span>
            {reviews.length} Reviews
          </span>
        </div>
      </div>
    </>
  );
};

export default RestOverviewheader;
