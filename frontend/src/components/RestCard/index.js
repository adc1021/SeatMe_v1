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
    <div id="card-body">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/PrZb_-PS73VhBAlmIArF8cIdZLE=/0x0:4928x3280/1200x0/filters:focal(0x0:4928x3280):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3913500/Faro_gnocchi.0.jpg"
          id="filler-image"
        ></img>
        <div id="restaurant-info">
          <p>{restaurant.name}</p>
          <p>{restaurant.averageRating}</p>
          <p>100 reviews</p>
          <p>{restaurant.cuisine}</p>
          <p>{restaurant.address}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
