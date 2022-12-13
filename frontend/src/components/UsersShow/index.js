import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import React, { useEffect } from "react";
import NavBar from "../NavBar";
import "./UsersShow.css";
import * as reservationActions from "../../store/reservationsReducer";
import csrfFetch from "../../store/csrf";
import ReservationShow from "../ReservationShow";

const UsersShow = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    // debugger
    return state.session ? state.session.user : {};
  });
  const reservations = useSelector((state) => {
    return state.reservations ? state.reservations : {};
  });

  useEffect(() => {
    dispatch(reservationActions.fetchReservations());
  }, []);

  const resArr = Object.values(reservations);

  // const userReservations = resArr.filter((res) => (
  //   res.userId === user.id
  // ))


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
                      <Link to="" class="link">
                        Reservations
                      </Link>
                    </li>
                    <li>
                      <Link to="" class="link">
                        Saved Restaurants
                      </Link>
                    </li>
                    <li>
                      <Link to="" class="link">
                        Account Details
                      </Link>
                    </li>
                    <li>
                      <Link to="" class="link">
                        Preferences
                      </Link>
                    </li>
                    <li>
                      <Link class="link">Payment Methods</Link>
                    </li>
                  </ul>
                </nav>
                <div className="points-reservations">
                  <div id="points-box">
                    <header
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2>Points</h2>
                      <div></div>
                    </header>
                  </div>
                      {resArr.map((res) => {
                        if (res.userId === user.id) {
                          return <ReservationShow resData={res} />;
                        }
                      })}
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default UsersShow;
