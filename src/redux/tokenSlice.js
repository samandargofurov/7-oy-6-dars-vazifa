import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        add: (state, actions) => {
            state.value = actions.payload;
        },
        remove: (state) => {
            state.value = ''
        }
    }
})

export const { add, remove } = tokenSlice.actions;
export default tokenSlice.reducer;