import { useEffect } from "react";


export const fetchUser = () => {
    if (typeof window !== 'undefined') {
        const userInfo = localStorage.getItem('user') !== 'undifined' ?
            JSON.parse(localStorage.getItem('user')) :
            localStorage.clear();
        return userInfo;
    }

};

export const fetchPostId = () => {
    if (typeof window !== 'undefined') {
        const postInfo = localStorage.getItem("postId") !== "undefined"
            ? JSON.parse(localStorage.getItem("postId"))
            : localStorage.clear();
        return postInfo ? postInfo : "";
    }
};

