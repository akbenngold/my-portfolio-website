// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM5-mFciW9Dem7lPBlSSCW19ynod_X8BI",
  authDomain: "portfolio-contact-form-847dd.firebaseapp.com",
  projectId: "portfolio-contact-form-847dd",
  storageBucket: "portfolio-contact-form-847dd.appspot.com",
  messagingSenderId: "1062746019674",
  appId: "1:1062746019674:web:38dc0897d6d69c60a34563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;