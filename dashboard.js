import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, addDoc, getFirestore, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { app, auth } from "./files/firebase.js"; // Import auth from firebase.js


// Auth state change handling
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is authenticated');
    } else {
        window.location.href = 'login.html';
    }
});

// Logout button event listener
const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Error signing out: ", error);
    });
});
