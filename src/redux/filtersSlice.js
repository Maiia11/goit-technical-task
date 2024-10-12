import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: "",
        equipment: {
            ac: false,
            automatic: false,
            kitchen: false,
            tv: false,
            bathroom: false
        }
    },
    reducers: {
        chooseLocation(state, action) {
            state.location = action.payload;
        },
        setEquipmentFilter(state, action) {
            state.equipment = {
                ...state.equipment,
                ...action.payload
            };
        }
    }
}) 

export const { chooseLocation, setEquipmentFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;