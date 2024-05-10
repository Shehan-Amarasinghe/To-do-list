// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZIVxM4mDh5TTa29PSpc_MahaxnLadcyY",
  authDomain: "todo-14979.firebaseapp.com",
  projectId: "todo-14979",
  storageBucket: "todo-14979.appspot.com",
  messagingSenderId: "226514539694",
  appId: "1:226514539694:web:69945725ab4d481bc3893f",
  measurementId: "G-KHPBM11R8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)