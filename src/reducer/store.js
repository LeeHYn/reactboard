import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import {boardSlice} from "./boardSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        board: boardSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});