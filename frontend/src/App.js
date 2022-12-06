import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import LogoutButton from "./components/LogoutButton";
import SignupForm from "./components/SignUp";
import Navigation from "./components/Navigation";


function App() {
  return (
    <>
      <div id="info-bar">
        <select>
          <options>Deutsch</options>
          <options>English</options>
          <options>Espanol</options>
        </select>
      </div>
      <div id="navbar">
        <div id="logo">
          {/* <img id="ot-logo" alt="" src="https://spng.pngfind.com/pngs/s/3-38455_stacked-lockup-opentable-logo-png-transparent-png.png"></img> */}
        {/* <h1>SeatMe</h1> */}
        <NavLink className="seatMe-logo" exact to="/">
          SeatMe
        </NavLink>
        </div>
        <Navigation />
      </div>
      <div id="forms">
        <Switch>
          <Route path="/signup">
            <SignupForm />
           </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
