// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOUFmjNEuOXHEE7wK7B77jdi1NnzRuj9c",
  authDomain: "reci-13b1c.firebaseapp.com",
  databaseURL: "https://reci-13b1c-default-rtdb.firebaseio.com",
  projectId: "reci-13b1c",
  storageBucket: "reci-13b1c.firebasestorage.app",
  messagingSenderId: "128734053136",
  appId: "1:128734053136:web:f99047b65c42649d9e5b95",
  measurementId: "G-KG6HG88WMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);