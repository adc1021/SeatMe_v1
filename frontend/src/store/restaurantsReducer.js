import csrfFetch from "./csrf";

export const RECEIVE_RESTAURANT = "restaurants/RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANTS = "restaurants/RECEIVE_RESTAURANTS";

export const receiveRest = (restaurant) => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant,
  };
};

export const receiveRestaurants = (restaurants) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants
  }
}

export const fetchRest = (restaurantId) => async (dispatch) => {
  const res = await csrfFetch(`api/restaurants/${restaurantId}`);

  if (res.ok) {
    const data = res.json();
    // sessionStorage.setItem("restaurantData", data);
    dispatch(receiveRest(data));
  }
};

export const fetchRestaurants = () => async (dispatch) => {
  const res = await csrfFetch(`api/restaurants`);
  if (res.ok) {
    const restaurants = await res.json();
    // sessionStorage.setItem("restaurantData", data);
    dispatch(receiveRestaurants(restaurants));
  }
};

const restaurantsReducer = (oldState = {}, action) => {
  const newState = { ...oldState }

  switch(action.type) {
    case RECEIVE_RESTAURANT:
      newState[action.restaurant.id] = action.restaurant;
      return newState;
    case RECEIVE_RESTAURANTS:
      return { ...newState, ...action.restaurants }
    default:
      return oldState;
    }
};

export default restaurantsReducer;
