import {configureStore} from '@reduxjs/toolkit';
import linksReducer from '../components/links/linksSlice';

export const store = configureStore({
    reducer: {
        links: linksReducer
    },
});
