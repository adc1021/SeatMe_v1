import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer';


window.createUser = createUser
window.loginUser = loginUser
window.logoutUser = logoutUser


const initializeApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById("root")
    );
  };

  restoreSession().then(initializeApp)

let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
let initialState = {};

if (currentUser) {
    initialState = {
        users: {
        [currentUser.id]: currentUser
        }
    };
};
