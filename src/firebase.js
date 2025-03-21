import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAbMXcBnDBs8siNIdgDmprZJoPIRvoBAqI",
  authDomain: "projetreact-935b2.firebaseapp.com",
  projectId: "projetreact-935b2",
  storageBucket: "projetreact-935b2.firebasestorage.app",
  messagingSenderId: "814301686359",
  appId: "1:814301686359:web:58ce3f0b23a640b76b1112",
  measurementId: "G-Y552B6T03T",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore (base de données)
export const db = getFirestore(app);