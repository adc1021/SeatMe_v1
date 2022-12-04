import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer';
import configureStore from './store/index'
import { useDispatch } from "react-redux";


const initializeApp = () => {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let initialState = {};

  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      }
    };
  };


  window.createUser = createUser
  window.loginUser = loginUser
  window.logoutUser = logoutUser

  const store = configureStore(initialState);
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>

      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
    );
  };

  restoreSession().then(initializeApp());
