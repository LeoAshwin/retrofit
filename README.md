Project Retrofit
User Friendly fitness tracker


Works Done
Basic layout webpage -breathing/calories/checkup/meal
Login/signup - connected to mongodb
feedback - connected to mongodb

FIREBASE CODES TO BE IMPLEMENTED

//terminal command
npm install firebase

//API KEYS TO BE ADDED IN LOGIN.HTML AND SIGNUP.HTML INSIDE FUNCTION CODE 

const firebaseConfig = {
  apiKey: "AIzaSyDnOK7vujEguISq48WZaad--YSlOEZTmzY",
  authDomain: "retrofit-3270d.firebaseapp.com",
  projectId: "retrofit-3270d",
  storageBucket: "retrofit-3270d.appspot.com",
  messagingSenderId: "1064644650311",
  appId: "1:1064644650311:web:5e0286f2c7b5386fa89862"
};


//FULL CODE WITH PROCEDURE 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnOK7vujEguISq48WZaad--YSlOEZTmzY",
  authDomain: "retrofit-3270d.firebaseapp.com",
  projectId: "retrofit-3270d",
  storageBucket: "retrofit-3270d.appspot.com",
  messagingSenderId: "1064644650311",
  appId: "1:1064644650311:web:5e0286f2c7b5386fa89862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//NEED TO UPDATE SDK LIBRARIES VIA CDN





