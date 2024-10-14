import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = {
  campers: campersReducer,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});