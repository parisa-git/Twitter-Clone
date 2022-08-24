import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
// import dynamic from "next/dynamic";
import { fetchUser } from '../utils/fetchLocalStorage';



const userInfo = fetchUser();


const userAuth = createSlice({
    name: "userAuth",
    initialState: {
        user: userInfo,
        logOutModal: false,
    },
    reducers: {
        singinUser(state, action) {
            state.user = action.payload;
        },
        signOut(state) {
            state.user = null;
        },
        toggle(state) {
            state.logOutModal = !state.logOutModal
        },
        closeModal(state) {
            state.logOutModal = false
        }
    },

});

export const userAuthActions = userAuth.actions;

export default userAuth;