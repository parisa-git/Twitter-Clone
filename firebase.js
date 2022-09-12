// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: "twitter-d776a.firebaseapp.com",
//     projectId: "twitter-d776a",
//     storageBucket: "twitter-d776a.appspot.com",
//     messagingSenderId: "494315494984",
//     appId: "1:494315494984:web:9bd6aed8f010265200c27d"
// };
const firebaseConfig = {
  apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-758c9.firebaseapp.com",
  projectId: "twitter-clone-758c9",
  storageBucket: "twitter-clone-758c9.appspot.com",
  messagingSenderId: "175078809388",
  appId: "1:175078809388:web:e20b1d3859b72ad38fd689"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
// const storage = getStorage();

// export { app, db, storage };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const db = getFirestore();

const storage = getStorage(app);

export { app, firestore, storage , db };