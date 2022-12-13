import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as restaurantActions from "../../store/restaurantsReducer";
import "./ReservationShow.css";

const ReservationShow = ({ resData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantActions.fetchRest(resData.restaurantId));
  }, []);

  const restaurantData = useSelector((state) =>
    state.restaurants ? state.restaurants[resData.restaurantId] : {}
  );

  return (
    <>
      <div id="display-info-div" >
        <img id="rest-card-img" alt="" src={restaurantData.photoUrl}></img>
        <div id="rest-name-span">
          <span
            style={{
              width: "100%",
              fontSize: "1.25rem",
              fontWeight: "700",
              lineHeight: "1.5rem",
            }}
          >
            {restaurantData.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default ReservationShow;
