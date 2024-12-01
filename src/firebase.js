import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de importar Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAvCqJ-eFXzNZSN0k5VASnHDVwVowYM4dA",
  authDomain: "portfolio-170fe.firebaseapp.com",
  projectId: "portfolio-170fe",
  storageBucket: "portfolio-170fe.appspot.com", // Revisa el storageBucket
  messagingSenderId: "555884952783",
  appId: "1:555884952783:web:43053a15147becd879cbba",
  measurementId: "G-37F8Z07H7H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Usamos getFirestore() para obtener la instancia de Firestore

export { db };
