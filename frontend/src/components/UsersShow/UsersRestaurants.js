import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index";
import * as savedRestActions from "../../store/savedRestaurantsReducer"

const UsersRestaurants = ({ user, reservations }) => {
  const dispatch = useDispatch();

  const savedRestaurants = useSelector( state => {
    return state.savedRestaurants ? state.savedRestaurants : {}
  })

  useEffect(() => {
    dispatch(savedRestActions.fetchSavedRestaurants())
  })

  console.log(savedRestaurants)

  return (
    <div className="points-reservations">
      <div className="column" style={{ padding: "16px" }}>
        <h2 style={{ margin: "0px" }} className="saves-header">
          Saved Restaurants
        </h2>
      </div>
    </div>
  );
};

export default UsersRestaurants;
