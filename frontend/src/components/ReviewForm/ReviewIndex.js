import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as reviewActions from "../../store/reviewsReducer"

const ReviewIndex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewActions.fetchReviews())
  }, [dispatch])

  useSelector((state) => {
    return state.reviews ? state.reviews : {}
  })

  return(
    <>

    </>
  )
}

export default ReviewIndex
