import React from "react";
import ReactDOM from 'react-dom';
import Root from "./components/root";
import createStore from "./store/store";


import {login,logout} from "./actions/session"


document.addEventListener("DOMContentLoaded",()=>{
  const rootEL = document.getElementById("root")

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  const store = createStore(preloadedState);
  
  window.getState = store.getState;

  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<Root store={store}/>,rootEL)
})