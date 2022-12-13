import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as restaurantActions from "../../store/restaurantsReducer";
import "./ReservationShow.css";

const ReservationShow = ({ resData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantActions.fetchRest(resData.restaurantId));
  }, [dispatch, resData.restaurantId]);

  const restaurantData = useSelector((state) =>
    state.restaurants ? state.restaurants[resData.restaurantId] : {}
  );
  debugger;

  return (
    <>
      <div id="upcoming-reservations">
        <h2 style={{ margin: "0" }}>Upcoming Reservations</h2>
        <div id="display-info-div">
          <img id="rest-card-img" alt="" src={restaurantData.photoUrl}></img>
          <div id="rest-name-span">
            <span>{restaurantData.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationShow;
