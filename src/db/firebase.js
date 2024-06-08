// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// import { getStorage } from "firebase/storage";


import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDoACpzTptr1-Yjd4t58_8hN03bc9xzl0g",
//   authDomain: "connect-mvp-ace2e.firebaseapp.com",
//   projectId: "connect-mvp-ace2e",
//   storageBucket: "connect-mvp-ace2e.appspot.com",
//   messagingSenderId: "154485172376",
//   appId: "1:154485172376:web:777b069742b728872848ed",
//   measurementId: "G-XV95RS0PWF"
//   };


const firebaseConfig = {
  apiKey: "AIzaSyAb2MV0NIBb8hp5WBnbzQIf9RP5gZec4BY",
  authDomain: "hack-new-bcdc6.firebaseapp.com",
  projectId: "hack-new-bcdc6",
  storageBucket: "hack-new-bcdc6.appspot.com",
  messagingSenderId: "235126483772",
  appId: "1:235126483772:web:65bd59a569f0702aadcc39",
  measurementId: "G-5NP5GZMM35"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const storage = getStorage(app);

export const db = getFirestore(app);

export default app;
