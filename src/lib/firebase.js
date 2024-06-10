import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    // apiKey: import.meta.env.VITE_API_KEY,
    apiKey: "AIzaSyAUO_8BTdLyRx7OV3DeLieNjb3riNlwJUM",
    authDomain: "react-firebase-chatapp-86f18.firebaseapp.com",
    projectId: "react-firebase-chatapp-86f18",
    storageBucket: "react-firebase-chatapp-86f18.appspot.com",
    messagingSenderId: "223202577414",
    appId: "1:223202577414:web:078752ba78dc0d1cb78787",
    measurementId: "G-EN7TYEHV5B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();