import { createSlice } from "@reduxjs/toolkit";

const Comment = createSlice({
    name: "Comment",
    initialState: {
        open: false,
        postIds: "",
    },
    reducers: {
        openComments(state) {
            state.open = true
        },
        closeModal(state){
            state.open = false
        },
        getPostId(state,action){
            state.postIds = action.payload
        }

    }
})

export const CommentPostActions = Comment.actions;

export default Comment;