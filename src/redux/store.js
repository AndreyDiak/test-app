import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducers/users/usersReducer";

export const store = configureStore({
  reducer: {
    usersPage: usersReducer
  }
})

export const createReduxStore = (initialStore = {}) => {
  return configureStore({
    reducer: store,
    preloadedState: initialStore
  })
}