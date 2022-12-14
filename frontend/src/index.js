import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, useHistory } from "react-router-dom";
import { ModalProvider } from "./context/Modal";
import "./index.css";
import App from "./App";
import configureStore from "./store/index";
import { restoreSession } from "./store/session";
// import { createUser, loginUser, logoutUser } from './store/usersReducer';
import csrfFetch from "./store/csrf";
import * as sessionActions from "./store/session";
import * as reservationActions from "./store/reservationsReducer"

const store = configureStore();

const initializeApp = () => {
  // let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  // let initialState = {};

  // if (currentUser) {
  //   initialState = {
  //     users: {
  //       [currentUser.id]: currentUser
  //     }
  //   };
  // };


  if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.csrfFetch = csrfFetch;
    window.sessionActions = sessionActions;
    window.reservationActions = reservationActions; 
  }

  function Root() {
    return (
      <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ModalProvider>
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// restoreSession().then(initializeApp());

// let initialState = {};
if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(initializeApp);
} else {
  initializeApp();
}
