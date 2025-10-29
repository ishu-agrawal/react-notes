import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import tvShowReducer from './tvShowSlice';
import gptReducer from './gptSlice';
import langReducer from './langSlice';
import lang from './langConstants';

const appStore = configureStore ({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        tvShow: tvShowReducer,
        gpt: gptReducer,
        lang: langReducer,
    },
})

export default appStore;