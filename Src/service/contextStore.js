import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  messages: []
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_MSG = 'ADD_MSG'

const reducer = (state, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case ADD_MSG:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    default:
      return state;
  }
}

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);



export const login = (user) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT });
