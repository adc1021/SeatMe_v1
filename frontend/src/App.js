import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage'
import LogoutButton from './components/LogoutButton';
import SignupForm from './components/SignUp';
import Navigation from "./components/Navigation";


function App() {
  return (
    <div id='navbar'>
      <h1>SeatMe</h1>
      <div id='forms'>
      <Navigation />
      <Switch>
       <Route path="/login">
          <LoginFormPage />
        </Route>
       <Route path="/signup">
          <SignupForm />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
