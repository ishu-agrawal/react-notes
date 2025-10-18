import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
    name: "tvShow",
    initialState: {
        topRatedShows: null,
        nextWatchShows: null,
    },
    reducers: {
        addTopRatedShows : (state, action) => {
            state.topRatedShows = action.payload;
        },
        addNextWatchShows : (state, action) => {
            state.nextWatchShows = action.payload;
        },
    }
});

export const {
    addTopRatedShows,
    addNextWatchShows
} = tvShowSlice.actions;

export default tvShowSlice.reducer;