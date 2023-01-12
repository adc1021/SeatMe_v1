import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../../store/reviewsReducer";
import * as userActions from "../../store/usersReducer";
import "./ReviewForm.css";

const ReviewIndex = ({ restId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewActions.fetchReviews(restId));
    dispatch(userActions.fetchUsers());
  }, [dispatch, restId]);

  const reviews = useSelector((state) => {
    // debugger
    return state.reviews.reviews ? Object.values(state.reviews.reviews) : [];
  });

  const users = useSelector((state) => {
    return state.user ? Object.values(state.user) : [];
  });

  return (
    <>
      {reviews.map((review) => {
        // debugger
        return (
          <li className="review-box">
            <section className="user-section">
              <div className="user-logo user-logo-effects">DL</div>
              <p className="user-name">Demo Lition</p>
              <div className="user-review-count">
                <span className="comment-bubble">
                  <svg>
                    <g>
                      <path
                        d="M19,4 L5,4 C3.8954305,4 3,4.8954305 3,6 L3,15
                  C3,16.1045695 3.8954305,17 5,17 L11,17 L15.36,20.63
                  C15.6583354,20.8784924 16.0735425,20.9318337
                  16.4250008,20.7668198 C16.776459,20.6018059
                  17.0006314,20.2482681 17,19.86 L17,17 L19,17
                  C20.1045695,17 21,16.1045695 21,15 L21,6 C21,4.8954305
                  20.1045695,4 19,4 Z M19,15 L15,15 L15,17.73 L11.72,15 L5,
                  15 L5,6 L19,6 L19,15 Z"
                        style={{ fill: "#2D333F", fillRule: "nonzero" }}
                      ></path>
                    </g>
                  </svg>
                </span>
                <p className="num-display">1 review</p>
              </div>
            </section>
            <section>
              <section
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  marginBottom: "8px",
                }}
              >
                <div className="star-wrapper small review-stars">
                  <div className="star-svg-wrapper">
                    <div className="star-svg star-full-red"></div>
                    <div className="star-svg star-full-red"></div>
                    <div className="star-svg star-full-red"></div>
                    <div className="star-svg star-full-red"></div>
                    <div className="star-svg star-full-red"></div>
                  </div>
                </div>
                <p style={{margin: "0"}}>Dined on December 22, 2022</p>
              </section>
            </section>
          </li>
        );
      })}
    </>
  );
};

export default ReviewIndex;
