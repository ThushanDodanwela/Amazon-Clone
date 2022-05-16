// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg_yezkHcL0B6F4ZcjMcJDX9ejBJkNr80",
  authDomain: "clone-5f461.firebaseapp.com",
  projectId: "clone-5f461",
  storageBucket: "clone-5f461.appspot.com",
  messagingSenderId: "809192693093",
  appId: "1:809192693093:web:951289537c739bab78d58c",
  measurementId: "G-VX9VGDRNG0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
