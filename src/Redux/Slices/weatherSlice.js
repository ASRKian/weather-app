import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//actions
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=6ce4d1a622af6bd0f595c40d970655e0`);
            // console.log(data);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data)
        }
    }
);

//slices

const weatherSlice = createSlice({
    name: "weather",
    initialState: { data: 'loaded' },
    extraReducers: builder => {

        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        })

        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.weather = undefined;
            state.loading = false;
            state.error = action?.payload;
        })
    }
})

export default weatherSlice.reducer;