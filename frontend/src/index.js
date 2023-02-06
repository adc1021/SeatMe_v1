import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, useHistory, useLocation } from "react-router-dom";
import { ModalProvider } from "./context/Modal";
import "./index.css";
import App from "./App";
import configureStore from "./store/index";
import { restoreSession } from "./store/session";
import  Footer  from '../src/components/Footer/Footer'
import csrfFetch from "./store/csrf";
import * as sessionActions from "./store/session";
import * as reservationActions from "./store/reservationsReducer"
import * as restaurantAcions from "./store/restaurantsReducer"
import * as reviewActions from "./store/reviewsReducer"
import * as savedRestaurantActions from "./store/savedRestaurantsReducer"
import LoginFormModal from "./components/LoginFormModal";

const store = configureStore();

const initializeApp = () => {

  if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.csrfFetch = csrfFetch;
    window.sessionActions = sessionActions;
    window.reservationActions = reservationActions;
    window.restaurantAcions = restaurantAcions
    window.reviewActions = reviewActions
    window.savedRestaurantActions = savedRestaurantActions
  }

  function Root() {
    return (
      <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
            <Footer />
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
