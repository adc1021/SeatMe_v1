import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./UsersShow.css";
import "./index.css"
import * as reservationActions from "../../store/reservationsReducer";
import UserReservations from "./UserReservations";
import UsersRestaurants from "./UsersRestaurants";
import { fetchSavedRestaurants } from "../../store/savedRestaurantsReducer";

const UsersShow = () => {
  const userId = useParams()
  const [change, setChange] = useState("Reservations")
  const [text, setText] = useState("")
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.session ? state.session.user : {};
  });

  const reservations = useSelector((state) => {
    return state.reservations ? state.reservations : {};
  });

  useEffect(() => {
    dispatch(reservationActions.fetchReservations());
  }, [dispatch]);

  const savedRestaurants = useSelector((state) => {
    return state.savedRestaurants ? state.savedRestaurants : {};
  })

  useEffect(() => {
    dispatch(fetchSavedRestaurants(user.id))
  }, [dispatch])

  const handleSwitch = (e) => {
    let text = e.target.innerHTML;
    // setText(text)
    setChange(text)
  }

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
                    <li className="users-li">
                      <Link to={`/users/${user.id}`}  id="on" className="link">
                        Reservations
                      </Link>
                    </li>
                    <li className="users-li">
                      <Link to={`/my/favorites`} id="off" className="link">
                        Saved Restaurants
                      </Link>
                    </li>
                  </ul>
                </nav>
                <UserReservations user={user} reservations={reservations}/>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default UsersShow;
