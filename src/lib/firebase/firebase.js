// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPS66gSEe_uSX_0mBbXzVu8gghDdgTGvo",
  authDomain: "hchip-438ba.firebaseapp.com",
  projectId: "hchip-438ba",
  storageBucket: "hchip-438ba.appspot.com",
  messagingSenderId: "1038481234196",
  appId: "1:1038481234196:web:f85b99dd19e693226c0a01",
  measurementId: "G-PHXCLGXVWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
