import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRest } from "../../store/restaurantsReducer";
import NavBar from "../NavBar";
import ReservationForm from "../ReservationForm";
import "./RestShow.css";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import * as restaurantActions from "../../store/restaurantsReducer";
import ReviewForm from "../ReviewForm";
import ReviewIndex from "../ReviewForm/ReviewIndex";

const RestShow = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const restaurant = useSelector((state) =>
    state.restaurants[id] ? state.restaurants[id] : {}
  );

  const user = useSelector((state) =>
    state.session.user ? state.session.user : {}
  );
  const savedRestaurants = useSelector((state) => {
    return state.savedRestaurants ? state.savedRestaurants.savedRestaurant : {};
  });

  const savesArr = savedRestaurants ? Object.values(savedRestaurants) : [];

  let currentSavedRestaurant = savesArr.filter((savedRest) => {
    return (
      savedRest.userId === user.id && savedRest.restaurantId === restaurant.id
    );
  });
  const [bool, setBool] = useState(!!currentSavedRestaurant);

  useEffect(() => {
    // dispatch()
    dispatch(savedRestActions.fetchSavedRestaurants());
  }, [dispatch, bool]);

  // debugger
  const saveTag = bool ? (
    <img
      alt=""
      id="save-svg"
      src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg" // white
    ></img>
  ) : (
    <img
      alt=""
      id="save-svg"
      src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark_selected-b86940.svg" //red
    ></img>
  );

  // let saveTag = (
  //   <img
  //     alt=""
  //     id="save-svg"
  //     src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg" // white
  //   ></img>
  // );

  useEffect(() => {
    dispatch(fetchRest(id));
  }, []);

  const handleSave = (e) => {
    console.log(bool);
    e.preventDefault();
    setBool(!bool);
    console.log(currentSavedRestaurant);
    bool
      ? dispatch(
          savedRestActions.createSavedRestaurant({
            userId: user.id,
            restaurantId: id,
          })
        )
      : dispatch(
          savedRestActions.deleteSavedRestaurant(currentSavedRestaurant[0].id)
        );
  };
  // const handleSave = (e) => {
  //   e.preventDefault();
  //   setBool(!bool);
  //   bool
  //     ? dispatch(savedRestActions.deleteSavedRestaurant(id))
  //     : dispatch(
  //         savedRestActions.createSavedRestaurant({
  //           userId: user.id,
  //           restaurantId: id,
  //         })
  //       );
  // };

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
              <div id="text-div">Save this restaurant</div>
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
                  </li>
                  <li>
                    <button className="anchor">Menu</button>
                  </li>
                  <li>
                    <button className="anchor" href=".review">Reviews</button>
                  </li>
                </ol>
              </nav>
            </section>
            <section>
              <h1 id="restaurant-header">{restaurant.name}</h1>
            </section>
            <p style={{ lineHeight: "2rem" }}>{restaurant.description}</p>
              <ReviewForm restaurantId={id} userId={user.id}/>
              <ReviewIndex restId={id}/>
          </div>
          <ReservationForm restaurantId={id} />
        </div>
      </div>
    </>
  );
};

export default RestShow;
