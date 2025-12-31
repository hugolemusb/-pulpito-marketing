import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaN8FaplNDxIdZrE-re_RWdnCX4O77lVs",
    authDomain: "pulpito-web-65f3e.firebaseapp.com",
    projectId: "pulpito-web-65f3e",
    storageBucket: "pulpito-web-65f3e.firebasestorage.app",
    messagingSenderId: "488039023642",
    appId: "1:488039023642:web:60ec6d07cc8b45a2c23da3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
