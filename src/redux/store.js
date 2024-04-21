import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
    reducer: {
        token: tokenSlice,
        users: usersSlice
    }
})