// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// import { getStorage } from "firebase/storage";


import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBH9EdCzD1n1NIu-f9ORTfTPDNxgySl0PI",
    authDomain: "connect-cdb2e.firebaseapp.com",
    projectId: "connect-cdb2e",
    storageBucket: "connect-cdb2e.appspot.com",
    messagingSenderId: "38146768051",
    appId: "1:38146768051:web:b7bee148469a9dda6044c6",
    measurementId: "G-5Z7LW7K33K"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const storage = getStorage(app);

export const db = getFirestore(app);

export default app;
