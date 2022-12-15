import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRest } from "../../store/restaurantsReducer";
import NavBar from "../NavBar";
import ReservationForm from "../ReservationForm";
import "./RestShow.css";

const RestShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [bool, setBool] = useState(true);
  const restaurant = useSelector((state) =>
    state.restaurants[id] ? state.restaurants[id] : {}
  );

  const saveTag = bool ? (<img
    alt=""
    id="save-svg"
    src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg"
  ></img>) : (
    <img
                alt=""
                id="save-svg"
                src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark_selected-b86940.svg"
              ></img>
  )

  useEffect(() => {
    dispatch(fetchRest(id));
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    setBool(!bool)

  }


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
                    <button className="anchor">Reviews</button>
                  </li>
                </ol>
              </nav>
            </section>
            <section>
              <h1 id="restaurant-header">{restaurant.name}</h1>
            </section>
            <p style={{lineHeight: "2rem"}}>{restaurant.description}</p>
          </div>
         <ReservationForm restaurantId={ id }/>
        </div>
      </div>
    </>
  );
};

export default RestShow;
