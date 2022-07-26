import React from "react";
import { app } from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { userAuthActions } from "../../store/user-auth";
import postcss from "postcss";



const signin = () => {


    const dispatch = useDispatch();
    const router = useRouter();
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    // const user = useSelector((state) => state.userAuth.user);
    // console.log(user);

    const signInHandler = async () => {
        // if (!user) {

        const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);

        localStorage.setItem('user', JSON.stringify(providerData[0]));
        dispatch(userAuthActions.singinUser(providerData[0]));

        router.push('/');
        // }
    };


    return (

        <div className="flex justify-center mt-20 space-x-4">
            <img
                src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
                alt="twitter image inside a phone"
                className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
            />
            <div className="">
                <div className="flex flex-col items-center">
                    <img
                        className="w-36 object-cover"
                        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                        alt="twitter logo"
                    />
                    <p className="text-center text-sm italic my-10">
                        This app is created for learning purposes
                    </p>
                    <button
                        onClick={signInHandler}
                        className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                    >
                    
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default signin



