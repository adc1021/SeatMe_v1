import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as reviewActions from "../../store/reviewsReducer"

const ReviewIndex = ({ restId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewActions.fetchReviews(restId))
  }, [dispatch, restId])

  const reviews = useSelector((state) => {
    // debugger
    return state.reviews ? Object.values(state.reviews.reviews) : []
  })

  return(
    <>
     {reviews.map((review) => {
      // debugger
      return <h1>{review.comment}</h1>
     })}
    </>
  )
}

export default ReviewIndex
