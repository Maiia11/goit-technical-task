import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location:""
    },
    reducers: {
        chooseLocation(state, action) {
            state.location = action.payload;
        }
    }
}) 

export const { chooseLocation } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;