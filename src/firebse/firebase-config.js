// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAg_z0CK8oldTtduaa8Zs30w3LcVSdKZo",
  authDomain: "myntra-auth-cd6a6.firebaseapp.com",
  projectId: "myntra-auth-cd6a6",
  storageBucket: "myntra-auth-cd6a6.appspot.com",
  messagingSenderId: "981701931148",
  appId: "1:981701931148:web:f6f254c818315bea7b4ba9",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
