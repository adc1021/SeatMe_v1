import csrfFetch from "./csrf";

export const RECEIVE_RESERVATION = "reservations/RECEIVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "reservations/RECEIVE_RESERVATIONS";
export const ADD_RESERVATION = "reservations/ADD_RESERVATION"


export const receiveReservation = (reservationId) => {
  return {
    type: RECEIVE_RESERVATION,
    reservationId,
  };
};

export const receiveReservations = (reservations) => {
  return {
    type: RECEIVE_RESERVATIONS,
    reservations
  }
}

export const addReservation = (reservation) => {
  return {
    type: ADD_RESERVATION,
    reservation
  }
}

