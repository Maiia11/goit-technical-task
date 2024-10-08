import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";

const rootReducer = {
    cars: carsReducer
};

export const store = configureStore({
  reducer: rootReducer,
});