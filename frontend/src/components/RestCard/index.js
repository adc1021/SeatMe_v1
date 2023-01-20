import { useSelector, useDispatch } from "react-redux";
import * as restActions from "../../store/restaurantsReducer";
import { NavLink, useHistory } from "react-router-dom";
import "./RestCard.css";
import { useEffect } from "react";
// import useNavigate from "react-use-navigate";
import * as reviewActions from "../../store/reviewsReducer"

const RestaurantCard = ({ restaurantId }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) =>
    state.restaurants[restaurantId] ? state.restaurants[restaurantId] : {}
  );

  const reviews = useSelector((state) => {
    // debugger
    return state.reviews.reviews ? Object.values(state.reviews.reviews) : [];
  });
  // debugger

  useEffect(() => {
    dispatch(reviewActions.fetchReviews(restaurantId));
  }, [dispatch, restaurantId]);


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
    } else if (restaurant.pricePoint >= 30 && restaurant.pricePoint < 49) {
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
        <img alt="" src={restaurant.photoUrls[0]} id="filler-image"></img>
        <div id="restaurant-info">
          <h3 id="rest-header">{restaurant.name}</h3>
          <div style={{display: "flex", alignItems: "center"}}>
            {stars()}
            <span id="reviews-span">{reviews.length} reviews</span>
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
              12:00 PM
            </NavLink>
          </div>
        </div>
    </NavLink>
  );
};

export default RestaurantCard;
