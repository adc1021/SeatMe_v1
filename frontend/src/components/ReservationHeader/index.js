import React, { createContext, useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./ReservationHeader.css";
import { fetchRestaurants } from "../../store/restaurantsReducer";
import RestaurantCard from "../RestCard";

const ReservationHeader = ({ setQuery }) => {
  // const [query, setQuery] = useState("")
  const dispatch = useDispatch();
  const restaurants = useSelector( (state) => {
    return state.restaurants ? state.restaurants : {};
  })


  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch]);

  // restaurants.filter( restaurant => {
  //   if (query === "") {
  //     return restaurant
  //   } else if (restaurant.cuisine.toLowerCase().includes(query.toLowerCase())) {
  //     return restaurant
  //   }
  // })

  return (
    <header className="res-header">
      <div>
        <h1 id="res-header-title">Find your table for any occasion</h1>
      </div>
      <div id="flex-box">
        <div id="date-time-party-container">
          <div>
            <div>
              <input type="date" id="date-win"></input>
            </div>
          </div>
          <div>
            <select id="time-container" className="dropdown">
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
              <option>10:00 PM</option>
              <option>11:00 PM</option>
            </select>
          </div>
          <div id="party-size" className="dropdown">
            <select id="time-container" className="dropdown">
              <option>1 person</option>
              <option>2 people</option>
              <option>3 people</option>
            </select>
          </div>
        </div>
        <div>
          <input
            id="head-search-bar"
            type="text"
            placeholder="Location, Restaurant, Cuisine"
            onChange={ e => setQuery(e.target.value)}
          />
        </div>
        <div>
          <button id="cont-button">
            Let's Go
          </button>
        </div>
      </div>
    </header>
  );
};

export default ReservationHeader;
