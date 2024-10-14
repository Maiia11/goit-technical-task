import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (state, action) => {
            const index = state.indexOf(action.payload);
            if (index === -1) {
                state.push(action.payload); // Добавляем в избранное
            } else {
                state.splice(index, 1); // Удаляем из избранного
            }
        },
        loadFavorites: (state, action) => {
            return action.payload; // Загружаем из localStorage
        }
    }
});

export const { toggleFavorite, loadFavorites } = favoritesSlice.actions;
export  const favoritereducer = favoritesSlice.reducer;