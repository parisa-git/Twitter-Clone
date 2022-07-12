export const fetchUser = () => {
    if (typeof window !== 'undefined') {
        const userInfo = localStorage.getItem('user') !== 'undifined' ?
            JSON.parse(localStorage.getItem('user')) :
            localStorage.clear();
            return userInfo;
    }

};