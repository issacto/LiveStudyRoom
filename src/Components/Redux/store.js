import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import login from "./action";

function reducer(state = "", action) {
  switch(action.type) {
    case 'LOGINED':
      return {
        name:action.payload
      };
    case 'LOGOUT':
      return {
        name: ""
      };
      // NOT HERE return state;
      default:
  // add here
  return state;
  }
  
}

const x=  createStore(combineReducers({
  login: reducer,
}))
export default x;