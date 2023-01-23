import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ReservationHeader.css";

const ReservationHeader = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <header className="res-header">
      <div>
        <h1 id="res-header-title">Find your table for any occasion</h1>
      </div>
      <div id="flex-box">
        <div id="date-time-party-container">
          <div
            className="date-picker-wrapper"
          >
            <svg>
              <g style={{ lineHeight: "1" }}>
                <path
                  d="M17,5 L19,5 C20.1045695,5 21,5.8954305 21,7 L21,19
                C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21
                3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L7,5 L7,4
                C7,3.44771525 7.44771525,3 8,3 C8.55228475,3 9,3.44771525
                9,4 L9,5 L15,5 L15,4 C15,3.44771525 15.4477153,3 16,3
                C16.5522847,3 17,3.44771525 17,4 L17,5 Z M19,9 L19,7 L5,7 L5,9
                L19,9 Z M19,11 L5,11 L5,19 L19,19 L19,11 Z"
                  fill="#2D333F"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            <DatePicker
              selected={startDate}
              wrapperClassName="datePicker"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div id="time-container-wrapper">
            <select id="time-container" className="dropdown">
              <option>11:00 AM</option>
              <option>11:30 AM</option>
              <option>12:00 PM</option>
              <option>12:30 PM</option>
              <option>1:00 PM</option>
              <option>1:30 PM</option>
              <option>2:00 PM</option>
              <option>2:30 PM</option>
              <option>3:00 PM</option>
              <option>3:30 PM</option>
              <option>4:00 PM</option>
              <option>4:30 PM</option>
              <option>5:00 PM</option>
              <option>5:30 PM</option>
              <option>6:00 PM</option>
              <option>6:30 PM</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
              <option>9:30 PM</option>
              <option>10:00 PM</option>
              <option>10:30 PM</option>
              <option>11:00 PM</option>
              <option>11:30 PM</option>
            </select>
          </div>
          <div id="party-size" className="dropdown">
            <i id="little-man-icon" className="fa-regular fa-user"></i>
            <select id="person-container" className="dropdown">
              <option>1 person</option>
              <option>2 people</option>
              <option>3 people</option>
            </select>
          </div>
        </div>
        <div id="search-div">
          <div id="search-div-container">
            <div>
          <svg id="magnifying-glass">
            <g style={{ lineHeight: "1" }}>
              <path
                d="M13,15.9291111 L13,21.5 C13,21.7761424 12.7761424,22
                  12.5,22 L11.5,22 C11.2238576,22 11,21.7761424 11,21.5
                  L11,15.9291111 C7.60770586,15.4438815 5,12.5264719 5,9
                  C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675
                  19,9 C19,12.5264719 16.3922941,15.4438815 13,15.9291111
                  Z M12,4 C9.23857625,4 7,6.23857625 7,9 C7,11.7614237
                  9.23857625,14 12,14 C14.7614237,14 17,11.7614237 17,9
                  C17,6.23857625 14.7614237,4 12,4 Z"
                fill="#2D333F"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Location, Restaurant, Cuisine"
          />
          </div>
        </div>
        </div>
        <div>
          <button id="cont-button">Let's Go</button>
        </div>
      </div>
    </header>
  );
};

export default ReservationHeader;
