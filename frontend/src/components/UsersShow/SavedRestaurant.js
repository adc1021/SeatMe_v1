import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import * as restActions from "../../store/restaurantsReducer";
import { NavLink, useHistory, Link } from "react-router-dom";

const SavedRestaurant = ({ rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const restaurant = useSelector((state) =>
    state.restaurants[rest.restaurantId]
      ? state.restaurants[rest.restaurantId]
      : {}
  );
  useEffect(() => {
    dispatch(restActions.fetchRest(rest.restaurantId));
  }, [rest]);

  const handleDelete = (e) => {
    dispatch(savedRestActions.deleteSavedRestaurant(rest.id));
    window.location.reload(false);
  };

  const handleReserve = (e) => {
    history.replace(`/restaurants/${rest.restaurantId}`)
  }

  return (
    <>
      <div id="display-info-div">
        <img id="rest-card-img" alt="" src={restaurant.photoUrl}></img>
        <div id="rest-name-span">
          <span
            style={{
              width: "100%",
              fontSize: "1rem",
              fontWeight: "450",
              lineHeight: "1.5rem",
            }}
          >
            {restaurant.name}
          </span>
          <span id="reservation-status" style={{ marginTop: "4px" }}>
            <button className="remove-button" onClick={handleDelete}>
              <img
                alt=""
                src="https://www.opentable.com/my/NewContent/img/bookmark-filled.svg"
                style={{ marginRight: "4px" }}
              />
              <div>Remove from saved restaurants</div>
            </button>
          </span>
          <div className="star-wrapper small">
            <div className="star-svg-wrapper">
              <div className="star-svg star-full"></div>
              <div className="star-svg star-full"></div>
              <div className="star-svg star-full"></div>
              <div className="star-svg star-full"></div>
              <div className="star-svg star-quarter"></div>
            </div>
          </div>
          <p style={{ fontSize: "0.875rem" }}>{restaurant.address}</p>
          <span style={{ display: "flex", flexDirection: "row" }}></span>
        </div>
        <div>
          <button className="reserve-button" onClick={handleReserve}>Reserve Now</button>
        </div>
      </div>
    </>
  );
};

export default SavedRestaurant;
