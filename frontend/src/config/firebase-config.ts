import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_Cb_HTD5Qn0fECMZuYpRn6HciVUyKjpI",
  authDomain: "skill-quest-6af2c.firebaseapp.com",
  projectId: "skill-quest-6af2c",
  storageBucket: "skill-quest-6af2c.appspot.com",
  messagingSenderId: "780461583673",
  appId: "1:780461583673:web:8b791bb2f9d37c6ac7cce8",
  measurementId: "G-WZH6MK45L0",
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const googlePovider = new GoogleAuthProvider();
