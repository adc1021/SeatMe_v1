import csrfFetch from "./csrf";

export const RECEIVE_RESERVATION = "reservations/RECEIVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "reservations/RECEIVE_RESERVATIONS";
export const REMOVE_RESERVATION = "reservations/REMOVE_RESERVATIONS"


export const receiveReservation = (reservation) => {
  // debugger
  return {
    type: RECEIVE_RESERVATION,
    reservation,
  };
};

export const receiveReservations = (reservations) => {
  return {
    type: RECEIVE_RESERVATIONS,
    reservations
  }
}

export const removeReservation = (reservationId) => {
  return {
    type: REMOVE_RESERVATION,
    reservationId
  }
}



export const fetchReservation = (reservationId) => async (dispatch) => {
  // debugger
  const res = await fetch(`/api/reservations/${reservationId}`)
  // debugger
  if(res.ok) {
    const data = await res.json();

    dispatch(receiveReservation(data))
  }
}

export const fetchReservations = () => async (dispatch) => {
  const res = await fetch(`api/reservations`)

  if(res.ok) {
    const reservations = await res.json();

    dispatch(receiveReservations(reservations))
  }
}

// export const updateReservations = (reservationId) => async (dispatch) => {
//   const res = await fetch(`api/reservations/${reservationId}`, { method: 'POST'})
// }

export const deleteReservation = (reservationId) => async(dispatch) => {
  const res = await fetch(`api/reservations/${reservationId}`, { method: 'DELETE'})

  dispatch(removeReservation(reservationId))
}

const reservationsReducer = (oldState = {}, action) => {
  const newState = { ...oldState }

  switch(action.type) {
    case RECEIVE_RESERVATION:
      newState[action.reservation.id] = action.reservation
      return newState
    case RECEIVE_RESERVATIONS:
      return { ...newState, ...action.reservations }
    case REMOVE_RESERVATION:
      delete newState[action.reservationId]
      return newState
    default:
    return newState
  }
}

export default reservationsReducer;
