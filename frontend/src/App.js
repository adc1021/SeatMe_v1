import React from "react";
import { Route, Switch } from "react-router-dom";
import RestShow from "./components/RestShow";
import Splash from "./components/Splash";
import UsersShow from "./components/UsersShow";
import ReservationsIndex from "./components/ReservationsIndex";
import UpdateReservation from "./components/ReservationShow/UpdateReservation";
import UpdateReservationForm from "./components/UpdateReservationForm";

function App() {
  return (
    <>
      <Switch>
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
        <Route path={"/"}>
          <Splash />
        </Route>
      </Switch>
    </>
  );
}

export default App;
