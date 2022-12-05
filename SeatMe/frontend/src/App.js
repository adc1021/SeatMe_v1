import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage'
import LogoutButton from './components/LogoutButton';
import SignupForm from './components/SignUp';

function App() {
  return (
    <>
      <h1>SeatMe</h1>
      <Switch>
       <Route path="/login">
          <LoginFormPage />
        </Route>
       <Route path="/signup">
          <SignupForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
