import { useSelector } from "react-redux";
import * as restActions from "../../store/restaurantsReducer";
import { NavLink } from "react-router-dom";
import "./RestCard.css";

const RestaurantCard = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    state.restaurants ? state.restaurants[restaurantId] : null
  );
  // debugger
  return (
    <a id="card-body">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/PrZb_-PS73VhBAlmIArF8cIdZLE=/0x0:4928x3280/1200x0/filters:focal(0x0:4928x3280):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3913500/Faro_gnocchi.0.jpg"
          id="filler-image"
        ></img>
        <div id="restaurant-info">
          <h3 id="rest-header">{restaurant.name}</h3>
          <div id="rating-wrapper">
            <div><img  id="star-rating" src="https://p.kindpng.com/picc/s/391-3915578_5-star-rating-red-5-star-rating-hd.png"></img></div>
            <span>170 reiews</span>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;
