// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSbEYTCXwO9nB0Q9rjsL2EUrTa1k-8-XA",
  authDomain: "netflixgpt-5f590.firebaseapp.com",
  projectId: "netflixgpt-5f590",
  storageBucket: "netflixgpt-5f590.firebasestorage.app",
  messagingSenderId: "153101399955",
  appId: "1:153101399955:web:075b149de848262c715a66",
  measurementId: "G-MXR1Q4GWFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
