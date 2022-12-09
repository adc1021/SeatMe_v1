import { useSelector } from "react-redux";
import * as restActions from "../../store/restaurantsReducer";
import { NavLink } from "react-router-dom";
import "./RestCard.css";
import { useEffect } from "react";

const RestaurantCard = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    state.restaurants ? state.restaurants[restaurantId] : null
  );



  const dollarSign = () => {if(restaurant.pricePoint < 20) {
    return <span id="dollar-span">$<span id="lighter-dollar">$$$</span></span>
    // span.appendChild(childSpan)
  } else if(restaurant.pricePoint > 20 && restaurant.pricePoint < 50){
    return <span id="dollar-span">$$$<span id="lighter-dollar">$</span></span>
  } else if(restaurant.pricePoint >= 50){
    return <span id="dollar-span">$$$$<span id="lighter-dollar"></span></span>

  }}


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
            <span id="reviews-span">170 reviews</span>
          </div>
          <div id="cuisine-price-wrapper">
            <span id="cuisine-span">{restaurant.cuisine}</span>
            <span id="price-span">
              {dollarSign()}
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;
