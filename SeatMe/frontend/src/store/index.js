import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./usersReducer";


export const rootReducer = combineReducers({
  user: userReducer
});


const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
