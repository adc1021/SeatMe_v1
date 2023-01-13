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

  useEffect(() => {
    dispatch(savedRestActions.fetchSavedRestaurant(user.id, id))
    dispatch(savedRestActions.fetchSavedRestaurants(user.id));
      dispatch(fetchRest(id));
  }, [dispatch])


  // const savesArr = savedRestaurants ? Object.values(savedRestaurants) : [];

  // let currentSavedRestaurant = savesArr.filter((savedRest) => {
  //   return (
  //     savedRest.userId === user.id && savedRest.restaurantId === restaurant.id
  //   );
  // });
  // const [bool, setBool] = useState(!!currentSavedRestaurant);


  // const saveTag = bool ? (
  //   <img
  //     alt=""
  //     id="save-svg"
  //     src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg" // white
  //   ></img>
  // ) : (
  //   <img
  //     alt=""
  //     id="save-svg"
  //     src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark_selected-b86940.svg" //red
  //   ></img>
  // );

  const handleSave = (e) => {
    // console.log(bool);
    // e.preventDefault();
    // setBool(!bool);
    // console.log(currentSavedRestaurant);
    // bool
    //   ? dispatch(
    //       savedRestActions.createSavedRestaurant({
    //         userId: user.id,
    //         restaurantId: id,
    //       })
    //     )
    //   : dispatch(
    //       savedRestActions.deleteSavedRestaurant(currentSavedRestaurant[0].id)
    //     );
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
              {/* {saveTag} */}
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
                    {/* <button className="anchor">Overview</button> */}
                    <a id="overview-anchor" href="#overview-anchor">Overview</a>
                  </li>
                  <li>
                    <button className="anchor">Menu</button>
                  </li>
                  <li>
                    {/* <button className="anchor" href=".review">Reviews</button> */}
                    <a id="overview-anchor" href="#anchor-name">Reviews</a>
                  </li>
                </ol>
              </nav>
            </section>
            <a id="overview-anchor"></a>
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
