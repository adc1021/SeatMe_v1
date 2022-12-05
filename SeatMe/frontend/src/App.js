import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage'
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <>
      <h1>SeatMe</h1>

      <Switch>
       <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
      <LogoutButton />
    </>
  );
}

export default App;
