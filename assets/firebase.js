
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , 
 createUserWithEmailAndPassword , 
 GoogleAuthProvider , 
 sendSignInLinkToEmail  ,
 signInWithPopup ,
  onAuthStateChanged , 
  signInWithEmailAndPassword ,
  signOut ,

 } 
  from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";



  import {getFirestore , collection , addDoc , getDocs, query,
   where,
    onSnapshot ,    deleteDoc  , updateDoc, deleteField , doc   } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyD431Y9W6wrJodPUbYe0ic3HRMKPdRvr5s",
  authDomain: "practice-d1871.firebaseapp.com",
  projectId: "practice-d1871",
  storageBucket: "practice-d1871.appspot.com",
  messagingSenderId: "507221909663",
  appId: "1:507221909663:web:e4655ebb4a683e7daa82aa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export {
 auth , 
 getAuth,
 createUserWithEmailAndPassword,
 GoogleAuthProvider,
 signInWithPopup,
 provider , 
 onAuthStateChanged ,
 signInWithEmailAndPassword , 
 sendSignInLinkToEmail ,
 signOut ,
 db ,
 getFirestore, 
 collection , 
 addDoc ,
 getDocs ,
  query,
   where,
    onSnapshot,
    deleteDoc , 
    updateDoc, 
    deleteField,
    doc
}
