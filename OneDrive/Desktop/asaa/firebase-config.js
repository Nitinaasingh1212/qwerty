// Firebase Configuration
// Replaced with User's provided keys
const firebaseConfig = {
    apiKey: "AIzaSyD3hdjTeks97DMdAOx8gjdtVVwdo9DCRwI",
    authDomain: "cornerclub-bfe4f.firebaseapp.com",
    projectId: "cornerclub-bfe4f",
    storageBucket: "cornerclub-bfe4f.firebasestorage.app",
    messagingSenderId: "135397835248",
    appId: "1:135397835248:web:0e66a4b7fab2f85a541d35",
    measurementId: "G-8RNQCNQE6Y"
};

// Initialize Firebase using CDN for browser support without build step
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, doc, orderBy, query, where, limit, onSnapshot, serverTimestamp, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ENABLE CACHING (OFFLINE PERSISTENCE)
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a a time.
        console.warn("Persistence failed: Multi-tab access.");
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the features required to enable persistence
        console.warn("Persistence not supported.");
    }
});

const auth = getAuth(app);

// Export for use in other files
export {
    db, auth,
    collection, addDoc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, doc, orderBy, query, where, limit, onSnapshot, serverTimestamp,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile
};
