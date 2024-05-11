import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
// configureStore({}) - take only object

export const store = configureStore({
    reducer:todoReducer
})