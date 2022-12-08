import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "../RestCard";
import * as restActions from "../../store/restaurantsReducer";
import './RestCarousel.css'

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
      <section>
      <ul id="restaurant-list">
        {restaurants.map((rest) => {
          return (
            <li>
              <RestaurantCard restaurantId={rest.id} key={rest.id}/>
              {/* <p>{rest.name}</p>
              <p>{rest.phoneNumber}</p> */}
            </li>
          );
        })}
      </ul>
      </section>
    </div>
  );
};

export default RestaurantCarousel;
