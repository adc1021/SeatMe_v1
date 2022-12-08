import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "../RestCard";
import * as restActions from "../../store/restaurantsReducer";
import "./RestCarousel.css";

const RestaurantCarousel = () => {
  const dispatch = useDispatch();

  const restaurants = useSelector((state) =>
    state.restaurants ? Object.values(state.restaurants) : []
  );
  // debugger

  useEffect(() => {
    dispatch(restActions.fetchRestaurants());
  }, []);

  return (
    <div>
      <section id="carousel-section">
        <header id="section-header">
          <div id="Order-takeout">
            <h2>Order takeout</h2>
          </div>
          <div id="view-all">View All</div>
        </header>
        <div id="outer-carousel-div">
          <div id="inner-carousel-div">
            <ul id="restaurant-list">
              {restaurants.map((rest) => {
                return (
                  <li id="rest-cards">
                    <RestaurantCard restaurantId={rest.id} key={rest.id} />
                    {/* <p>{rest.name}</p>
              <p>{rest.phoneNumber}</p> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantCarousel;
