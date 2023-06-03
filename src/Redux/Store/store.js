import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Slices/weatherSlice";

const store = configureStore({
        reducer : weatherReducer,
})

export default store;