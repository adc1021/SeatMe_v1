import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
// import LogoutButton from "./components/LogoutButton";
// import SignupForm from "./components/SignUp";
import RestShow from "./components/RestShow";
import Splash from "./components/Splash";

function App() {
  return (
    <>
      <Switch>
        <Route path={"/restaurants/:id"}>
          <RestShow />
        </Route>
        <Route path={"/"}>
          <Splash />
        </Route>
      </Switch>
    </>
  );
}

export default App;
