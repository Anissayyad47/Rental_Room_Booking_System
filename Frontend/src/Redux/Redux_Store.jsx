import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const Store = configureStore({
    reducer:{
        counter:counterReducer
    },
})





