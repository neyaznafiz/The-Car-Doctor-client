// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBURDGN19jVEWg00ilXKrD0x6bCOQzVLVA",
  authDomain: "genius-car-services-4215e.firebaseapp.com",
  projectId: "genius-car-services-4215e",
  storageBucket: "genius-car-services-4215e.appspot.com",
  messagingSenderId: "282636118169",
  appId: "1:282636118169:web:97643e6c515f6a5dd7b008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;