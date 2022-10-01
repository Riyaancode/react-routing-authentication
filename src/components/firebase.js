// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdkFTIjNtRHHfogvv4Tw2_BL12GfQ78YQ",
  authDomain: "react-routing-authentication.firebaseapp.com",
  projectId: "react-routing-authentication",
  storageBucket: "react-routing-authentication.appspot.com",
  messagingSenderId: "489011247969",
  appId: "1:489011247969:web:a7650087c328479235a320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;