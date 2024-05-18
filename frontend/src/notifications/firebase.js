// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getMessaging,getToken} from 'firebase/messaging'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Cb_HTD5Qn0fECMZuYpRn6HciVUyKjpI",
  authDomain: "skill-quest-6af2c.firebaseapp.com",
  projectId: "skill-quest-6af2c",
  storageBucket: "skill-quest-6af2c.appspot.com",
  messagingSenderId: "780461583673",
  appId: "1:780461583673:web:8b791bb2f9d37c6ac7cce8",
  measurementId: "G-WZH6MK45L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)

export const generateToken = async () =>{
 const permission = await Notification.requestPermission()
 console.log(permission)
 if(permission=== 'granted'){
     const token = await getToken(messaging,{
        vapidKey:
        'BBC3pAwpHlgpc1aKzvYAPjSVboKyYnvtXqJwE-kEdiCdeD438NMfaYsSG3XEihx_RiVd4HtMJUIdK6Q7JxJoPJc',
     })
     console.log(token)
 }
}