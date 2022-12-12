// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBhGpX4-8wV89YTXWBIx3cCNR87PgMpJro",
  authDomain: "coffee-react-mcn.firebaseapp.com",
  projectId: "coffee-react-mcn",
  storageBucket: "coffee-react-mcn.appspot.com",
  messagingSenderId: "978489612316",
  appId: "1:978489612316:web:2cee2b2ccd96f6779fa7d9",
  measurementId: "G-9Z4P8WK9SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();