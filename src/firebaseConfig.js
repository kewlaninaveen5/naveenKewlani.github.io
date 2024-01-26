// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSl05t-zeanPi347HHrkX6zFzs2s-ceoA",
  authDomain: "naveen-kewlani.firebaseapp.com",
  projectId: "naveen-kewlani",
  storageBucket: "naveen-kewlani.appspot.com",
  messagingSenderId: "970931989059",
  appId: "1:970931989059:web:156ee50ebe56eb1b8e42f6",
  measurementId: "G-66CWFYFRP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);