import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgwvrrb0tirEUTkKvsfQaBW4eJ7bsGKAs",
    authDomain: "next-coder-61246.firebaseapp.com",
    projectId: "next-coder-61246",
    storageBucket: "next-coder-61246.appspot.com",
    messagingSenderId: "902754948076",
    appId: "1:902754948076:web:85b01d3ef7aa812aac26c9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);