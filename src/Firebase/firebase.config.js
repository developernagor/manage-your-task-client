// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpMYLXo2-T7AOeWWTwX0b1KVDQnW6Vt-c",
  authDomain: "manage-your-task-38705.firebaseapp.com",
  projectId: "manage-your-task-38705",
  storageBucket: "manage-your-task-38705.firebasestorage.app",
  messagingSenderId: "687270970997",
  appId: "1:687270970997:web:482ab5b03fc8a8e7489a3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;