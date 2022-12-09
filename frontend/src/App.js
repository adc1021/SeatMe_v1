import React from "react";
import { Route, Switch } from "react-router-dom";
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
