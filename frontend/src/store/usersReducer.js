import csrfFetch from "./csrf";

const RECEIVE_USER = 'users/RECEIVE_USER';
const RECEIVE_USERS = 'users/RECEIVE_USERS'
const REMOVE_USER = 'users/REMOVE_USER';

// ACTION CREATORS
export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

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

export const fetchUsers = () => async dispatch => {
  const res = await csrfFetch('/api/users');
  if(res.ok) {
    const users = await res.json();
    dispatch(receiveUsers(users));
  }
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
            // debugger
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_USERS:
            return { ...nextState, ...action.users }
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        default:
            return state;
    }
};

export default userReducer
