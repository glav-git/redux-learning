import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux';


// state is just data in any form (object, array, sting, zalupa, whatever...)
const defaultState = {
  cash: 0,
}

// action in reducer is just object
// type - required "string" that define "what shoudl i do
// and params are optional data that we can pass in reducer to compleet action
// action = {type: "", payload: "?"}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CASH":
      // state by default unmutable, so wee ned to unpak state and then
      // edit certain field
      return {...state, cash: state.cash + action.payload}
    
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}

    // reduser MUST return state even if action unknown
    default:
      return state
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
