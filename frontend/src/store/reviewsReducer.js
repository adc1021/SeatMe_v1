import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEWS";

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
}

export const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
}

export const fetchReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`)
  if (res.ok) {
    const data = await res.json();

    dispatch(receiveReview(data))
  }
}

export const fetchReviews = (restId) => async (dispatch) => {
  // debugger
  const res = await csrfFetch(`/api/restaurants/${restId}/reviews`);
  if(res.ok) {
    const payload = await res.json();

    dispatch(receiveReviews(payload))
  }
}

export const createReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = res.json();

    dispatch(receiveReview(data));
  }
};

export const updateReview = (review) => async (dispatch) => {

  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review)
  });

  if(res.ok) {
    const data = res.json()
    dispatch(receiveReview(data));
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  dispatch(removeReview(reviewId));
};

const reviewsReducer = (oldState = {}, action) => {
  const newState = { ...oldState };

  switch (action.type) {
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case RECEIVE_REVIEWS:
      return { ...newState, ...action.reviews };
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    default:
      return newState;
  }
};

export default reviewsReducer;
