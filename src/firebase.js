// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvCqJ-eFXzNZSN0k5VASnHDVwVowYM4dA",
  authDomain: "portfolio-170fe.firebaseapp.com",
  projectId: "portfolio-170fe",
  storageBucket: "portfolio-170fe.firebasestorage.app",
  messagingSenderId: "555884952783",
  appId: "1:555884952783:web:43053a15147becd879cbba",
  measurementId: "G-37F8Z07H7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Inicializa Firestore

// Exporta la base de datos para usarla en otros archivos
export { app, db };
