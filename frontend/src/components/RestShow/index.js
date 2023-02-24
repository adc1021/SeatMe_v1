import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchRest } from "../../store/restaurantsReducer";
import NavBar from "../NavBar";
import ReservationForm from "../ReservationForm";
import "./RestShow.css";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import ReviewForm from "../ReviewForm/index";
import ReviewIndex from "../ReviewForm/ReviewIndex";
import RestOverviewheader from "./RestOverviewheader";
import { Modal } from "../../context/Modal";
import SigninForm from "../LoginFormModal/SigninForm";

const RestShow = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [tagClass, setTagClass] = useState("anchor");
  const [liClass, setLiClass] = useState('anchor-li')


  const restaurant = useSelector((state) =>
    state.restaurants[id] ? state.restaurants[id] : {}
  );

  const user = useSelector((state) =>
    state.session.user ? state.session.user : {}
  );
  console.log(user);
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
    // Object.values(user).length > 1 ? setShowModal(false) : setShowModal(true)
    if (Object.values(user).length > 1) {
      savedRestaurant
        ? dispatch(savedRestActions.deleteSavedRestaurant(savedRestaurant.id))
        : dispatch(
            savedRestActions.createSavedRestaurant({
              userId: user.id,
              restaurantId: id,
            })
          );
      history.go(0);
    } else {
      setShowModal(true);
    }
  };

  const changeClass = (e) => {
    if(tagClass === 'anchor') {
      setTagClass('clicked')
      setLiClass('clicked-li')
    }else{
      setTagClass('anchor')
      setLiClass('anchor-li')
    }
  };
  console.log(restaurant.photoUrls)


  return (
    <>
      <NavBar />
      <div>
        <div id="img-container">
          <div></div>
          <img id="rest-img" alt="" src={restaurant.photoUrls}></img>
          <button id="save-button" onClick={handleSave}>
            <div id="save-button-div">{saveTag}</div>
          </button>
        </div>
        <div id="description-review-div">
          <div id="content-div">
            <section id="anchor-tags">
              <nav id="anchor-nav">
                <ol id="nav-ol">
                  <li className={liClass}>
                    <button
                      onClick={(e) => changeClass(e.target.value)}
                      className={tagClass}
                      href=""
                    >
                      Overview
                    </button>
                  </li>
                  <li className="anchor-li">
                    <button className="anchor" href="#how-does-it-work">Menu</button>
                  </li>
                  <li className="anchor-li">
                    <button className="anchor" href=".review">
                      Reviews
                    </button>
                  </li>
                </ol>
              </nav>
            </section>
            <section>
              <h1 id="restaurant-header">{restaurant.name}</h1>
            </section>
            <RestOverviewheader restaurant={restaurant} />
            <p style={{ lineHeight: "2rem" }}>{restaurant.description}</p>
            <ReviewForm restaurantId={id} user={user} />
            <ReviewIndex restId={id} user={user} />
          </div>
          <div className="sticky-div">
            <ReservationForm restaurant={restaurant} />
          </div>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <button onClick={() => setShowModal(false)} className="exit-button">
              <i class="fa-solid fa-xmark fa-xl"></i>
            </button>
            <SigninForm />
          </Modal>
        )}
      </div>
    </>
  );
};

export default RestShow;
