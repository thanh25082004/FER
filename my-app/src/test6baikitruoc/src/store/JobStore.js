import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './JobSlice';

const store = configureStore({
    reducer: {
        jobs: jobReducer
    }
});

export default store; 