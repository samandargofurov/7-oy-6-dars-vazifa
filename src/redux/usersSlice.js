import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: (state, actions) => {
            let copied = JSON.parse(JSON.stringify(state.value));
            copied.push(actions.payload);
            state.value = copied
        }
    }
})

export const {register} = usersSlice.actions;
export default usersSlice.reducer;