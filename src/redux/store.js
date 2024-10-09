import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";

const rootReducer = {
    campers: campersReducer
};

export const store = configureStore({
  reducer: rootReducer,
});