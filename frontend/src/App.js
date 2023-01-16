import React from "react";
import { Route, Switch } from "react-router-dom";
import RestShow from "./components/RestShow";
import Splash from "./components/Splash";
import UsersShow from "./components/UsersShow";
import ReservationsIndex from "./components/ReservationsIndex";
import UpdateReservation from "./components/ReservationShow/UpdateReservation";
import UpdateReservationForm from "./components/UpdateReservationForm";
import UsersRestaurants from "./components/UsersShow/UsersRestaurants";

function App() {
  return (
    <>
      <Switch>
        <Route path={"/my/favorites"}>
          <UsersRestaurants />
        </Route>
        <Route path={"/restaurants/:id"}>
          <RestShow />
        </Route>
        <Route path={"/users/:id"}>
          <UsersShow />
        </Route>
        <Route path={"/user/:id/reservations"}>
          <ReservationsIndex />
        </Route>
        <Route path={"/reservations/:id/update"}>
          <UpdateReservationForm />
        </Route>
        <Route path={"/user/:id/savedRestaurants"} >
        </Route>
        <Route path={"/"}>
          <Splash />
        </Route>
      </Switch>
    </>
  );
}

export default App;
