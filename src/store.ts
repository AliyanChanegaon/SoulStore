import {
    applyMiddleware,
    combineReducers,
    legacy_createStore
  } from "redux";

  import NavReducer from "./Redux/navbar.reducer";



const rootReducer = combineReducers({
    nav: NavReducer,
    
  });



  const logger = (state) => (next) => (action) => {
    if (typeof action === "function") {
      return action(state.dispatch, state.getState);
    }
    return next(action);
  };


  export const store = legacy_createStore(rootReducer, applyMiddleware(logger));
