import { NavLink } from "react-router-dom";
import ReservationHeader from "../ReservationHeader";
import Navigation from "../Navigation";
import RestaurantCarousel from "../RestaurantCarousel";

const Splash = () => {
  return (
    <>
      <div id="info-bar">
        <select>
          <option>Deutsch</option>
          <option>English</option>
          <option>Espanol</option>
        </select>
      </div>
      <div id="navbar">
        <NavLink className="seatMe-logo" exact to="/">
          <div id="logo">
            <img
              id="ot-logo"
              alt=""
              src="data:image/png;
    base64,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"
            ></img>
            <div id="logo-text">SeatMe</div>
          </div>
        </NavLink>
        <Navigation />
      </div>
      <ReservationHeader />
      <div>
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
                >
                  Check me out on Github!
                </a>
              </div>
            </div>
          </div>
        </section>
        <RestaurantCarousel />
      </div>
    </>
  );
};

export default Splash;
