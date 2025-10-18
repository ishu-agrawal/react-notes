import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import tvShowReducer from './tvShowSlice';

const appStore = configureStore ({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        tvShow: tvShowReducer,
    },
})

export default appStore;