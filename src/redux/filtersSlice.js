import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: "",
        equipment: {
            AC: false,
            transmission: "",
            kitchen: false,
            TV: false,
            bathroom: false
        },
        vechicleType: ""
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
        },
        setVechicleType(state, action) {
            state.vechicleType = action.payload;
        }
    }
}) 

export const { chooseLocation, setEquipmentFilter, setVechicleType} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;