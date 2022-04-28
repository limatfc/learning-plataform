import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyy2gzCQSzLFBWzxegAtDx4Ms50zTssWk",
  authDomain: "learning-plataform.firebaseapp.com",
  projectId: "learning-plataform",
  storageBucket: "learning-plataform.appspot.com",
  messagingSenderId: "176466280513",
  appId: "1:176466280513:web:349da18bc1f8c7bb1506c0",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const fireStore = getFirestore(app);
