// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// import { getStorage } from "firebase/storage";


import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoACpzTptr1-Yjd4t58_8hN03bc9xzl0g",
  authDomain: "connect-mvp-ace2e.firebaseapp.com",
  projectId: "connect-mvp-ace2e",
  storageBucket: "connect-mvp-ace2e.appspot.com",
  messagingSenderId: "154485172376",
  appId: "1:154485172376:web:777b069742b728872848ed",
  measurementId: "G-XV95RS0PWF"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const storage = getStorage(app);

export const db = getFirestore(app);

export default app;
