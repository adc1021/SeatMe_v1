import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import NavBar from "../NavBar";
import "./UsersShow.css";

const UsersShow = () => {
  const user = useSelector((state) => {
    // debugger
    return state.session ? state.session.user : {}});

  // debugger;
  return (
    <>
      <NavBar />

      <section id="page-container">
      <header id="users-header">
        <div id="user-name-div">
          <h1 id="user-name">{user.firstName} {user.lastName}</h1>
          <p style={{color: "#6f737b"}}>0 points</p>
        </div>
        <div id="max-width">
          <div id="user-info">
            <div id="nav-page-wrapper">
              <nav id="page-nav">
                <ul>
                  <li>Reservations</li>
                  <li>Saved Restaurants</li>
                  <li>Account Details</li>
                  <li>Preferences</li>
                  <li>Payment Methods</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      </section>
    </>
  );
};

export default UsersShow;
