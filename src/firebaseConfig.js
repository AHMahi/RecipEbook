/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABTizjKeDxmHx1oqI7DE8g7ROptNVcCIo",
  authDomain: "recipebook-1b4e8.firebaseapp.com",
  projectId: "recipebook-1b4e8",
  storageBucket: "recipebook-1b4e8.appspot.com",
  messagingSenderId: "560578230512",
  appId: "1:560578230512:web:588f4b9596b2d0be122a35"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
export const auth = getAuth();  