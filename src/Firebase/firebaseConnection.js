// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnoKasFPjnt9zX1H7jQylIiP4y2q5MVsA",
    authDomain: "valeria-4cd29.firebaseapp.com",
    projectId: "valeria-4cd29",
    storageBucket: "valeria-4cd29.appspot.com",
    messagingSenderId: "548314061262",
    appId: "1:548314061262:web:ad6e19573298532cc0f39f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};