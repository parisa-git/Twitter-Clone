import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./user-auth";

const store = configureStore({
    reducer: {
        userAuth: userAuth.reducer
    }
});


export default store;