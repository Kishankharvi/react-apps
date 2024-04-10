// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZZ7QqtVyjI_qSXe04cIgugXvoaB_JdzQ",
  authDomain: "fir-tut-25d2f.firebaseapp.com",
  projectId: "fir-tut-25d2f",
  storageBucket: "fir-tut-25d2f.appspot.com",
  messagingSenderId: "362692998512",
  appId: "1:362692998512:web:cca68caa8262b7fd0e4bb5",
  measurementId: "G-9YSVPT5Q21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
