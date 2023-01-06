import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "../RestCard";
import * as restActions from "../../store/restaurantsReducer";
import "./RestCarousel.css";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const RestaurantCarousel = ({ query }) => {
  const dispatch = useDispatch();
  // console.log(query)
  const restaurants = useSelector((state) =>
    state.restaurants ? Object.values(state.restaurants) : []
  );
  // debugger

  useEffect(() => {
    dispatch(restActions.fetchRestaurants());
  }, []);

    const queryResponse = restaurants.filter( (restaurant) => {
    if (query === "") {
      return restaurant
    } else if (restaurant.cuisine.toLowerCase().includes(query.toLowerCase())) {
      return restaurant
    }
  })

  console.log(queryResponse)

  return (
    <div id="rest-wrapper">
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
              {/* {restaurants.map((rest, i) => {
                return (
                  <li id="rest-cards">
                    <RestaurantCard restaurantId={rest.id} key={rest.id} />
                  </li>
                );
              })} */}
              <CarouselProvider
                naturalSlideWidth={125}
                isIntrinsicHeight={true}
                totalSlides={restaurants.length}
                visibleSlides={5}
                step={4}
                dragEnabled={false}
              >
                <Slider>
                  {queryResponse.map((rest, i) => {
                    return (
                      <Slide key={rest.id} index={i}>
                        <li id="rest-cards">
                          <RestaurantCard restaurantId={rest.id} />
                        </li>
                      </Slide>
                    );
                  })}
                  {/* {cards.map((card, i) => {
                return <Slide index={i} key={card.id}>{card}</Slide>
              })} */}
                </Slider>
                <ButtonNext className="scroll-button" id="right-scroll-button">
                  <i class="fa-solid fa-v"></i>
                </ButtonNext>
                <ButtonBack className="scroll-button" id="left-scroll-button">
                  <i class="fa-solid fa-v"></i>
                </ButtonBack>
              </CarouselProvider>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantCarousel;
