import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import linksReducer from '../components/links/linksSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        links: linksReducer
    },
});
