import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./place.slices";

export const store = configureStore({
    reducer: {
        place: placeReducer,
    },
});