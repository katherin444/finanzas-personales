// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTkDqddtQL91yn4Xi2ZGBIynr26p2bduE",
  authDomain: "finanzas-personales-125c9.firebaseapp.com",
  projectId: "finanzas-personales-125c9",
  storageBucket: "finanzas-personales-125c9.firebasestorage.app",
  messagingSenderId: "43169991140",
  appId: "1:43169991140:web:d2a0c62ac2ad820cd75ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);