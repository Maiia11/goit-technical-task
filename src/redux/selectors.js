import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = state => state.campers.items;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectFilters = state => state.filters;

export const filteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter(camper => {
      const matchesLocation = camper.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesEquipment = Object.entries(filters.equipment).every(([key, value]) => {
        if (key === "transmission") {
          // Проверяем только если чекбокс "Automatic" установлен
          return !value || camper.transmission === "automatic";
        }
        if (value === true) {
          return camper[key] === value;
        }
        return true;
      });
      const matchesForm = filters.form ? camper.form === filters.form : true;

      return matchesLocation && matchesEquipment && matchesForm;
    });
  }
);