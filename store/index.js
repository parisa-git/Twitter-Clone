import { configureStore } from "@reduxjs/toolkit";
import Comment from "./comment";
import userAuth from "./user-auth";

const store = configureStore({
    reducer: {
        userAuth: userAuth.reducer , Comment: Comment.reducer
    }
});


export default store;