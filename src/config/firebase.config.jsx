// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const ENV = import.meta.env
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoZ-Z6ZOet4DGjL--eAijj7LtjIVKOYw0",
    authDomain: "testfirebase-871ac.firebaseapp.com",
    projectId: "testfirebase-871ac",
    storageBucket: "testfirebase-871ac.appspot.com",
    messagingSenderId: "487491252835",
    appId: "1:487491252835:web:aed666f03a72f805a53e56"
  }



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;