// import csrfFetch from "./csrf";

// export const RECEIVE_RESTAURANT = "restaurants/RECEIVE_RESTAURANT";

// export const receiveRest = (restaurant) => {
//   return {
//     type: RECEIVE_RESTAURANT,
//     restaurant,
//   };
// };

// export const fetchRest = (restaurant) => async (dispatch) => {
//   const res = await csrfFetch(`api/restaurants/${restaurant.id}`);

//   if (res.ok) {
//     const data = res.json();
//     sessionStorage.setItem("restaurantData", data);
//     dispatch(receiveRest(data));
//   }
// };

// const restaurantsReducer = (oldState = {}, action) => {
//   const newState = { ...oldState }
//   switch(action.type) {
//     case RECEIVE_RESTAURANT: {

//     }
//   }
// };

// export default restaurantsReducer;
