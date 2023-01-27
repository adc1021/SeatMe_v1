import { NavLink } from "react-router-dom";
import ReservationHeader from "../ReservationHeader";
import Navigation from "../Navigation";
import RestaurantCarousel from "../RestaurantCarousel";
import NavBar from "../NavBar";
import ReactDatePicker from "react-datepicker";
import BudgetCarousel from "../RestaurantCarousel/budgetCarousel";


const Splash = () => {
  return (
    <>
      <NavBar />
      <ReservationHeader />
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
          <RestaurantCarousel />
          <BudgetCarousel />
        </div>
      </div>
    </>
  );
};

export default Splash;
