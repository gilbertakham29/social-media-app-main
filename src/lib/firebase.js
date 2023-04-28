import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBT4_PCX5kKzkwfFDFUmddxcQHQumT3KEY",
  authDomain: "social-media-app-50947.firebaseapp.com",
  projectId: "social-media-app-50947",
  storageBucket: "social-media-app-50947.appspot.com",
  messagingSenderId: "1046378486543",
  appId: "1:1046378486543:web:800ece6e0dd91395aa7c7a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
