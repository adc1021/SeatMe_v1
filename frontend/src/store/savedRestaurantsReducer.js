import { bindActionCreators } from "redux";
import csrfFetch from "./csrf";

const RECEIVE_SAVED_RESTAURANT = "savedRestaurants/RECEIVE_SAVED_RESTAURANT"
const RECEIVE_SAVED_RESTAURANTS = "saveRestaurants/RECEIVE_SAVED_RESTAURANTS"
const REMOVE_SAVED_RESTAURANT = "savedRestaurants/REMOVE_SAVED_RESTAURANT"

export const receiveSavedRestaurant = (savedRestaurant) => {
  return {
    type: RECEIVE_SAVED_RESTAURANT,
    savedRestaurant
  }
}

export const receiveSavedRestaurants = (savedRestaurants) => {
  return {
    type: RECEIVE_SAVED_RESTAURANTS,
    savedRestaurants
  }
}

export const removeRestaurants = (restaurantId) => {
  return {
    type: REMOVE_SAVED_RESTAURANT,
    restaurantId
  }
}


export const fetchSavedRestaurant = (restaurantId) => async (dispatch) => {
  try {
    const savedRestaurant = await csrfFetch(`/api/savedRestaurant/${restaurantId}`)
    const data = await savedRestaurant.json()
    dispatch(receiveSavedRestaurant(data))
  }catch (err) {
    console.log(err)
  }
}

export const fetchSavedRestaurants = () => async (dispatch) => {
  try {
    const savedRestaurants = await csrfFetch(`/api/savedRestaurant`)
    const data = await savedRestaurants.json()
    dispatch(receiveSavedRestaurants(data))
  }catch (err) {
    console.log(err)
  }
}

export const createSavedRestaurant = (data) => async (dispatch) => {
  try {
    const newSave = await csrfFetch(`/api/savedRestaurant`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
    const savedRestaurant = await newSave.json();
    dispatch(receiveSavedRestaurant(savedRestaurant))
  } catch (err) {
    console.log(err)
  }
}

export const deleteSavedRestaurant = (restaurantId) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/savedRestaurant/${restaurantId}`, {
      method: "DELETE",
    });
    dispatch(REMOVE_SAVED_RESTAURANT(restaurantId))
  } catch (err) {
    console.log(err)
  }
}

const savedRestaurantReducer = (oldState = {}, action) => {
  const newState = { ...oldState }

  switch(action.type) {
    case RECEIVE_SAVED_RESTAURANT:
      newState[action.savedRestaurant.id] = action.savedRestaurant
      return newState
    case RECEIVE_SAVED_RESTAURANTS:
      return { ...newState, ...action.savedRestaurants }
    case REMOVE_SAVED_RESTAURANT:
      delete newState[action.savedRestaurant.id]
      return newState
    default:
      return oldState
  }
}

export default savedRestaurantReducer; 
