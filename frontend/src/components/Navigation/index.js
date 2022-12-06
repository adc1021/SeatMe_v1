import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupForm from "../SignUp";
// import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-link navbar-button" id="sign-up" to="/signup">
          Sign Up
        </NavLink>
        {/* <SignupForm />  */}
        <LoginFormModal />
        {/* <NavLink className='nav-link' id="sign-in" to="/login">Sign In</NavLink> */}
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
