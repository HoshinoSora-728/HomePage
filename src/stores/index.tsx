import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// それぞれ slice.reducer を default export している前提
import informationReducer from "./information";

const reducer = combineReducers({
  information: informationReducer,
});

// const store = configureStore({ reducer });

// export default store;
