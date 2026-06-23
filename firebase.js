// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCoFuhp7-0dwDgmzdD1-XxOBGro6JAMfuE",
    authDomain: "dassieprint.firebaseapp.com",
    projectId: "dassieprint",
    storageBucket: "dassieprint.firebasestorage.app",
    messagingSenderId: "951093689004",
    appId: "1:951093689004:web:d279b0d010b785eab6fd09"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot
};
