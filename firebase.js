// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV0yyN7Ya0QfyXg6UNCwbkGD_8DACiSjs",
  authDomain: "documentation-5225a.firebaseapp.com",
  projectId: "documentation-5225a",
  storageBucket: "documentation-5225a.appspot.com",
  messagingSenderId: "565178074187",
  appId: "1:565178074187:web:e64ee7ffdfd6dbb2d3b9ce",
  measurementId: "G-JHKSDPZBBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);