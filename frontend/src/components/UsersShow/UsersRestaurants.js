import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index";
import * as savedRestActions from "../../store/savedRestaurantsReducer";
import SavedRestaurant from "./SavedRestaurant";
import NavBar from "../NavBar";

const UsersRestaurants = () => {
  const dispatch = useDispatch();
  const savedRestaurants = useSelector((state) => {
    return state.savedRestaurants.savedRestaurant
      ? Object.values(state.savedRestaurants.savedRestaurant)
      : [];
  });
  const user = useSelector((state) => {
    return state.session ? state.session.user : {};
  });

  const reservations = useSelector((state) => {
    return state.reservations ? state.reservations : {};
  });

  useEffect(() => {
    dispatch(savedRestActions.fetchSavedRestaurants(user.id));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <section id="page-container">
        <header id="users-header">
          <div id="user-name-div">
            <h1 id="user-name">
              {user.firstName} {user.lastName}
            </h1>
            <p style={{ color: "#6f737b" }}>0 points</p>
          </div>
          <div id="max-width">
            <div id="user-info">
              <div id="nav-page-wrapper">
                <nav id="page-nav">
                  <ul>
                    <li>
                      <Link to={`/users/${user.id}`} id="off" className="link">
                        Reservations
                      </Link>
                    </li>
                    <li style={{ width: "100%" }}>
                      <Link to={`/my/favorites`} id="on" className="link">
                        Saved Restaurants
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="saved-rest-container">
                  <div className="points-reservations">
                    <div className="column" style={{ padding: "16px" }}>
                      <h2 style={{ margin: "0px" }} className="saves-header">
                        Saved Restaurants
                      </h2>
                    </div>
                  </div>
                  <div
                    className="points-reservations"
                    style={{ marginTop: "0px" }}
                  >
                    <div className="column" style={{ padding: "16px" }}>
                      {savedRestaurants.length === 0 ? (
                        <p style={{fontWeight: "600", paddingLeft: "25px"}}>
                          You have no favorite restaurants to show on this list.
                        </p>
                      ) : (
                        savedRestaurants.map((rest) => {
                          return <SavedRestaurant rest={rest} />;
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default UsersRestaurants;
