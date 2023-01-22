// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIg5WiaJ-ylRSnV2EGrmMo89yT8dVh9tQ",
  authDomain: "santipurscienceclubdata.firebaseapp.com",
  projectId: "santipurscienceclubdata",
  storageBucket: "santipurscienceclubdata.appspot.com",
  messagingSenderId: "76148396288",
  appId: "1:76148396288:web:440fb3e198d8707786e3e5",
  measurementId: "G-9CYSBWKR93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// export {auth,app};