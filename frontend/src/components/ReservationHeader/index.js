import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./ReservationHeader.css";

const ReservationHeader = () => {
  return (
    <header className="res-header">
      <div>
        <h1 id="res-header-title">Find your table for any occasion</h1>
      </div>
      <div id="flex-box">
        <div id="date-time-party-container">
          <div>
            <div>
              <input type="date"></input>
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
