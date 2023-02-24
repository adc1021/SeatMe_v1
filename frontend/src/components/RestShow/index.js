import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { fetchRest } from "../../store/restaurantsReducer";
import NavBar from "../NavBar";
import ReservationForm from "../ReservationForm";
import "./RestShow.css";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import * as restaurantActions from "../../store/restaurantsReducer";
import ReviewForm from "../ReviewForm/index";
import ReviewIndex from "../ReviewForm/ReviewIndex";
import RestOverviewheader from "./RestOverviewheader";

const RestShow = () => {
  const { id } = useParams();
  const history = useHistory()
  const dispatch = useDispatch();
  const location = useLocation();

  const restaurant = useSelector((state) =>
    state.restaurants[id] ? state.restaurants[id] : {}
  );

  const user = useSelector((state) =>
    state.session.user ? state.session.user : {}
  );

  const savedRestaurant = useSelector((state) => {
    return state.savedRestaurants[id] ? state.savedRestaurants[id] : null;
  });

  useEffect(() => {
    dispatch(savedRestActions.fetchSavedRestaurant(user.id, id));
    dispatch(fetchRest(id));
  }, [dispatch, id, user.id]);


  const saveTag = savedRestaurant ? (
    <>
      <img
        alt=""
        id="save-svg"
        src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark_selected-b86940.svg" // red
        ></img>
      <div id="text-div">Restaurant saved!</div>
    </>
  ) : (
    <>
      <img
        alt=""
        id="save-svg"
        src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg"
        //white
      ></img>
      <div id="text-div">Save this restaurant</div>
    </>
  );

  const handleSave = (e) => {
    e.preventDefault();
    savedRestaurant
      ? dispatch(savedRestActions.deleteSavedRestaurant(savedRestaurant.id))
      : dispatch(
          savedRestActions.createSavedRestaurant({
            userId: user.id,
            restaurantId: id,
          })
        );
      history.go(0)
  };

  let showPhotos = Array.isArray(restaurant.photoUrls) ? restaurant.photoUrls.slice(1, restaurant.photoUrls.length) :
    restaurant.photoUrls

  return (
    <>
      <NavBar />
      <div>
        <div id="img-container">
          <div class="image-grid">
            { Array.isArray(showPhotos) ? showPhotos.map((url, index) => (
              <img key={index} class="grid-image" src={url} alt="" /> )) : <img class="grid-image" alt="" src={restaurant.photoUrls}></img> }
          </div>
          {/* <img id="rest-img" alt="" src={restaurant.photoUrls}></img> */}
          <button id="save-button" onClick={handleSave}>
            <div id="save-button-div">
              {saveTag}
              {/* <div id="text-div">Save this restaurant</div> */}
            </div>
          </button>
        </div>
        <div className="index-container">
          <div id="description-review-div">
            <div id="content-div">
              <section id="anchor-tags">
                <nav id="anchor-nav">
                  <ol id="nav-ol">
                    <li>
                      <button className="anchor">Overview</button>
                      {/* <a id="overview-anchor" href="#overview-anchor">
                        Overview
                      </a> */}
                    </li>
                    <li>
                      <button className="anchor">Menu</button>
                    </li>
                    <li>
                      <button className="anchor" href=".review">Reviews</button>
                      {/* <a id="overview-anchor" href="#anchor-name">
                        Reviews
                      </a> */}
                    </li>
                  </ol>
                </nav>
              </section>
              <a id="overview-anchor"></a>
              <section>
                <h1 id="restaurant-header">{restaurant.name}</h1>
              </section>
              <RestOverviewheader restaurant={restaurant}/>
              <p style={{ lineHeight: "2rem" }}>{restaurant.description}</p>
              <ReviewForm restaurantId={id} user={user} />
              <ReviewIndex restId={id} user={user}/>
            </div>
            <ReservationForm restaurantId={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestShow;
