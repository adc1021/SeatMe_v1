import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./usersReducer";
import sessionReducer from "./session";
import restaurantsReducer from "./restaurantsReducer";
import reservationsReducer from "./reservationsReducer";
import savedRestaurantReducer from "./savedRestaurantsReducer";
import reviewsReducer from "./reviewsReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  restaurants: restaurantsReducer,
  reservations: reservationsReducer,
  savedRestaurants: savedRestaurantReducer,
  reviews: reviewsReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
