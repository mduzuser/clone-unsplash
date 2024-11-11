import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ3p45-UWIBL7rViNUy4cnoNjWXa0Gd9U",
  authDomain: "clone-unsplash.firebaseapp.com",
  projectId: "clone-unsplash",
  storageBucket: "clone-unsplash.firebasestorage.app",
  messagingSenderId: "164800831361",
  appId: "1:164800831361:web:01e4d5155bb2f6d436d280",
};

const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth(app);

//db
export const db = getFirestore(app);
