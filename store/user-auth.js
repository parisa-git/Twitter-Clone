import { createSlice } from "@reduxjs/toolkit";
// import {fetchUser} from '../utils/fetchLocalStorage';

// const userInfo = fetchUser();

const userAuth = createSlice({
    name: "userAuth",
    initialState: {
        user: null,
    },
    reducers: {
        singinUser(state, action) {
            state.user = action.payload;
        },
        signOut(state) {
            state.user = null;
        }
    },

});

export const userAuthActions = userAuth.actions;

export default userAuth;