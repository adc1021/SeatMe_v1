import { useSelector } from "react-redux";
import * as restActions from "../../store/restaurantsReducer";
import { NavLink, useHistory } from "react-router-dom";
import "./RestCard.css";
import { useEffect } from "react";
import useNavigate from "react-use-navigate";

const RestaurantCard = ({ restaurantId }) => {
  let history = useHistory();

  const restaurant = useSelector((state) =>
    state.restaurants[restaurantId] ? state.restaurants[restaurantId] : {}
  );


  const dollarSign = () => {
    if (restaurant.pricePoint < 20) {
      return (
        <span id="dollar-span">
          · $<span id="lighter-dollar">$$$</span>
        </span>
      );
    } else if (restaurant.pricePoint >= 20 && restaurant.pricePoint < 30) {
      return (
        <span id="dollar-span">
          · $$<span id="lighter-dollar">$$</span>
        </span>
      );
    } else if (restaurant.pricePoint >= 30 && restaurant.pricePoint < 40) {
      return (
        <span id="dollar-span">
          · $$$<span id="lighter-dollar">$</span>
        </span>
      );
    } else if (restaurant.pricePoint >= 50) {
      return (
        <span id="dollar-span">
          · $$$$<span id="lighter-dollar"></span>
        </span>
      );
    }
  };

  const stars = () => {
    // debugger
    if (restaurant.averageRating >= 5.0 ) {
      return (
        <div className="star-wrapper small">
            <div className="star-svg-wrapper">
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
            </div>
          </div>
      );
    } else if (restaurant.averageRating > 4.5 && restaurant.averageRating <= 4.9 ) {
      return (
        <div className="star-wrapper small">
            <div className="star-svg-wrapper">
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-three-quarters-red"></div>
            </div>
          </div>
      );
    } else if (restaurant.averageRating === 4.5) {
      return (
        <div className="star-wrapper small">
            <div className="star-svg-wrapper">
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-half-red"></div>
            </div>
          </div>
      );
    } else if (restaurant.averageRating > 4.2 && restaurant.averageRating < 4.5 ) {
      return (
        <div className="star-wrapper small">
            <div className="star-svg-wrapper">
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-quarter-red"></div>
            </div>
          </div>
      );
    } else if (restaurant.averageRating < 4.2 && restaurant.averageRating >= 4.0) {
      return (
        <div className="star-wrapper small">
            <div className="star-svg-wrapper">
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-empty-red"></div>
            </div>
          </div>
      )
    }
  }

  const handleTime = (e) => {
    e.stopPropagation();
  };

  return (
    <NavLink to={`restaurants/${restaurantId}`} target="_blank" id="card-body">
      <div>
        <img alt="" src={restaurant.photoUrl} id="filler-image"></img>
        <div id="restaurant-info">
          <h3 id="rest-header">{restaurant.name}</h3>
          <div id="rating-wrapper">
          {/* <div className="star-wrapper small">
            <div className="star-svg-wrapper">
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-full-red"></div>
              <div className="star-svg star-half-red"></div>
            </div>
          </div> */}
          {stars()}
            <span id="reviews-span">170 reviews</span>
          </div>
          <div id="cuisine-price-wrapper">
            <span id="cuisine-span">{restaurant.cuisine}</span>
            <span id="price-span">{dollarSign()}</span>
            <span id="neighborhood-span"> · {restaurant.neighborhood}</span>
          </div>
          <div id="booking-wrapper">
            <span>
              Booked 0 times today
              <span></span>
            </span>
          </div>
          <div id="time-slots">
            <NavLink id="time-slot-link" to={`/restaurants/${restaurantId}`} onClick={handleTime}>
              12:30 PM
            </NavLink>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default RestaurantCard;
