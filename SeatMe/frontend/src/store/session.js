import csrfFetch from "./csrf";

const SET_CURRENT_USER = "session/setCurrentUser";
const REMOVE_CURRENT_USER = "session/removeCurrentUser";

const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { email, phone_number } = user;

  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ email, phone_number }),
  });

  const data = await response.json();
  dispatch(setCurrentUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.user };
    case REMOVE_CURRENT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;
