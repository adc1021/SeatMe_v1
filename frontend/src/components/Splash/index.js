import { NavLink } from "react-router-dom";
import ReservationHeader from "../ReservationHeader";
import Navigation from "../Navigation";
import RestaurantCarousel from "../RestaurantCarousel";
import NavBar from "../NavBar";
import React, { createContext, useEffect, useState } from "react";

const Splash = () => {
  const [query, setQuery] = useState("")

  return (
    <>
      <NavBar />
      <ReservationHeader setQuery={setQuery} />
      <div id="main-wrap">
        <section id="location-banner">
          <div id="location-div">
            <div id="section-div-wrap">
              <span id="location-span">
                It looks like you're at App Academy. Not correct?
              </span>
              <div id="arrow-container">
                <div id="arrow-svg"></div>
                <a
                  id="git-hub-link"
                  target="_blank"
                  href="https://github.com/adc1021"
                  rel="noreferrer"
                >
                  Check me out on Github!
                </a>
              </div>
            </div>
          </div>
        </section>
        <div>
          <RestaurantCarousel query={query}/>
        </div>
      </div>
    </>
  );
};

export default Splash;
