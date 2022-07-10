import { createSlice } from "@reduxjs/toolkit";


const userAuth = createSlice({
    name: "userAuth",
    initialState: {
        user: null
    },
    reducers: {
        singinUser(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        }
    },

});

export const userAuthActions = userAuth.actions;

export default userAuth;