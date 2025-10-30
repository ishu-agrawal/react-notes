import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch : false,
        movieResult : null,
        movieNames : null,
    },
    reducers: {
        toggleGPTSearch : (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResults;
        }
    }
})

export const {
    toggleGPTSearch,
    addMovieResult,
} = gptSlice.actions;

export default gptSlice.reducer;