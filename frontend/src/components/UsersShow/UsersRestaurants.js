import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import SavedRestaurant from "./SavedRestaurant";

const UsersRestaurants = ({ user, reservations }) => {
  const dispatch = useDispatch();
  const savedRestaurants = useSelector((state) => {
    // debugger
    return state.savedRestaurants.savedRestaurant
      ? Object.values(state.savedRestaurants.savedRestaurant)
      : [];
  });

  useEffect(() => {
    dispatch(savedRestActions.fetchSavedRestaurants());
  }, [dispatch]);

  const savedArr = savedRestaurants.filter((rest) => {
    return rest.userId === user.id;
  });

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
          {savedArr.map((rest) => {
            return <SavedRestaurant rest={rest}/>
          })
            }
        </div>
      </div>
    </div>
  );
};

export default UsersRestaurants;
