import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = state => state.campers.items;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectFilters = state => state.filters.location;

export const filteredCampers = createSelector([selectCampers, selectFilters], (campers, filterLocation) => {
    if (!filterLocation) {
        return campers;
    }
    return campers?.filter(camper => camper.location.toLowerCase().includes(filterLocation.toLowerCase()));
})