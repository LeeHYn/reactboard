import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './Auth';
import {boardSlice} from "./boardSlice";
import {userSlice} from "./userSlice";

export default configureStore({

    reducer: {
        user: userSlice,
        board: boardSlice,
        authToken: tokenReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
