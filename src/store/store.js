import { combineReducers, createStore } from "@reduxjs/toolkit"
import authReducer from "../Reducers/AuthReducer";
import BusinessReducer from "../Reducers/BusinessReducer";
// import React from "react"

const allReducers = combineReducers({auth : authReducer, business: BusinessReducer})
const store = createStore(allReducers)

export default store;