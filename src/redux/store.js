import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";
import { favoritereducer } from "./favoritesSlice";

const rootReducer = {
  campers: campersReducer,
  filters: filtersReducer,
  favorites: favoritereducer,
};

export const store = configureStore({
  reducer: rootReducer,
});