import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as reviewActions from "../../store/reviewsReducer"
import * as userActions from "../../store/usersReducer"
import './ReviewForm.css'

const ReviewIndex = ({ restId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewActions.fetchReviews(restId))
    dispatch(userActions.fetchUsers())
  }, [dispatch, restId])

  const reviews = useSelector((state) => {
    // debugger
    return state.reviews.reviews ? Object.values(state.reviews.reviews) : []
  })

  

  return(
    <>
     {reviews.map((review) => {
      // debugger
      return <li className="review-box">
        <section className="user-section">
          <div className="user-logo user-logo-effects" onChange={findUser(`${review.userId}`)}>
            {review.userId}
          </div>
        </section>
      </li>
     })}
    </>
  )
}

export default ReviewIndex
