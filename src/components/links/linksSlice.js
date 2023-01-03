import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    links: []
};

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addLink: (state, action) => {
            state.links.push(action.payload)
        },
        deleteLink: (state, action) => {
            state.links = state.links.filter((item) => {
                return item.id !== action.payload
            })
        },
        increasePoint: (state, action) => {
            const index = state.links.findIndex((item) => {
                return item.id === action.payload
            })
            state.links[index].points += 1
        },
        decreasePoint: (state, action) => {
            const index = state.links.findIndex((item) => {
                return item.id === action.payload
            })
            if(state.links[index].points > 0){
                state.links[index].points -= 1
            }
        },
    },
});

export const {addLink, deleteLink, increasePoint, decreasePoint} = linksSlice.actions;

export const selectLinks = (state) => state.links.links;

export default linksSlice.reducer;
