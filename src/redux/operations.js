import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://66798f0d18a459f639507715.mockapi.io";

export const fetchCars = createAsyncThunk("advert/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("advert")
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})