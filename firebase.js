import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA21C0BOBjBNYXqavxT1FXxuxXJXWv9s0M",
    authDomain: "react-notes-33316.firebaseapp.com",
    projectId: "react-notes-33316",
    storageBucket: "react-notes-33316.appspot.com",
    messagingSenderId: "417740826542",
    appId: "1:417740826542:web:c67b6eb835c5aa8bfb0a3f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")