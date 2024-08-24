import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPoEHyRtRfYGyTxuJb5gsgd9eZCu8WXm4",
  authDomain: "my-giffy.firebaseapp.com",
  projectId: "my-giffy",
  storageBucket: "my-giffy.appspot.com",
  messagingSenderId: "524498978728",
  appId: "1:524498978728:web:70317c078418f316ca7f9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
