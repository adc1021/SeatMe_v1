import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import SavedRestaurant from "./SavedRestaurant";

const UsersRestaurants = ({ user, reservations }) => {
  const dispatch = useDispatch();
  const savedRestaurants = useSelector((state) => {
    return state.savedRestaurants.savedRestaurant
      ? Object.values(state.savedRestaurants.savedRestaurant)
      : [];
  });
  console.log(user)

  useEffect(() => {
    dispatch(savedRestActions.fetchSavedRestaurants(user.id));
  }, [dispatch]);


  return (
    <div className="saved-rest-container">
      <div className="points-reservations">
        <div className="column" style={{ padding: "16px" }}>
          <h2 style={{ margin: "0px" }} className="saves-header">
            Saved Restaurants
          </h2>
        </div>
      </div>
      <div className="points-reservations" style={{ marginTop: "0px" }}>
        <div className="column" style={{ padding: "16px" }}>
          {savedRestaurants.map((rest) => {
            return <SavedRestaurant rest={rest}/>
          })
            }
        </div>
      </div>
    </div>
  );
};

export default UsersRestaurants;
