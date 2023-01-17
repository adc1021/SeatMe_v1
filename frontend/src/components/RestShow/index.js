import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchRest } from "../../store/restaurantsReducer";
import NavBar from "../NavBar";
import ReservationForm from "../ReservationForm";
import "./RestShow.css";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import * as restaurantActions from "../../store/restaurantsReducer";
import ReviewForm from "../ReviewForm/index";
import ReviewIndex from "../ReviewForm/ReviewIndex";

const RestShow = () => {
  // debugger
  const { id } = useParams();
  const history = useHistory()
  const dispatch = useDispatch();

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

  return (
    <>
      <NavBar />
      <div>
        <div id="img-container">
          <div></div>
          <img id="rest-img" alt="" src={restaurant.photoUrl}></img>
          <button id="save-button" onClick={handleSave}>
            <div id="save-button-div">
              {saveTag}
              {/* <div id="text-div">Save this restaurant</div> */}
            </div>
          </button>
        </div>
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
            <p style={{ lineHeight: "2rem" }}>{restaurant.description}</p>
            <ReviewForm restaurantId={id} user={user} />
            <ReviewIndex restId={id} user={user}/>
          </div>
          <ReservationForm restaurantId={id} />
        </div>
      </div>
    </>
  );
};

export default RestShow;
