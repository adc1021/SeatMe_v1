import csrfFetch from "./csrf";

const RECEIVE_USER = 'users/RECEIVE_USER';
const REMOVE_USER = 'users/REMOVE_USER';

// ACTION CREATORS
export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const removeUser = userId => ({
    type: REMOVE_USER,
    userId // userId: userId
});

export const loginUser = user => async dispatch => {
  const res = await csrfFetch('api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  })

  const data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data.user))
  dispatch(receiveUser(data.user))
}

export const logoutUser = userId => async dispatch => {
  const res = await csrfFetch('/api/session', {
    method: 'DELETE'
  })

  sessionStorage.setItem('currentUser', null)
  dispatch(removeUser(userId))
}

export const createUser = user => async dispatch => {
  const res = await csrfFetch('api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  })

  const data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data.user));
  dispatch(receiveUser(data.user));
}

// REDUCER
const userReducer = ( state = {}, action ) => {
    const nextState = { ...state };

    switch(action.type) {
        case RECEIVE_USER:
            debugger
            nextState[action.user.id] = action.user;
            return nextState;
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        default:
            return state;
    }
};

export default userReducer
