// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxVlMbfjymJ8Eo1IqnQ0euuSNw00y8aJk",
  authDomain: "red-onion-food-2365b.firebaseapp.com",
  projectId: "red-onion-food-2365b",
  storageBucket: "red-onion-food-2365b.appspot.com",
  messagingSenderId: "608085234861",
  appId: "1:608085234861:web:7124d8d0a719eb68912224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;