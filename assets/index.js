
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


  window.addEventListener('click' , () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        
      } else {
        window.location.href = 'assets/signup.html'
      }
      
    });
    
  })

let logoutBtn = document.getElementById('logout-btn')
console.log(logoutBtn);
logoutBtn.addEventListener('click' , () => {
    signOut(auth).then(() => {
      console.log("User signed out successfully");
      window.location.href = "assets/signup.html"; 
  }).catch((error) => {
      console.error("Error signing out: ", error);
  });
})


let createAPost = document.getElementById('create-a-post')
console.log(createAPost);
createAPost.addEventListener('click' ,(event) => {
    console.log('kaam horaha ah');
     window.location.href = 'assets/makepost.html'
    })
    let disabledInput = document.getElementById('disabled-input')
    disabledInput.addEventListener('click' , ()=> {
    window.location.href = 'assets/makepost.html'
    console.log('hello');
})

function getPosts(){
    let postContainr = document.getElementById('post-container')
    postContainr.innerHTML = ''
    onSnapshot(collection(db, "UserPosts"), (snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id);   
            console.log(doc.data() , 'data');   
            let data = doc.data()
            console.log(data.url);
            
            postContainr.innerHTML += `<div class="image-name container mt-5">
      <div class="icon">
        <i class="fas fa-user"></i>
      </div>
      <div class="name">
        <h4>Muhammad Hasnain</h4>
        <p>${data.posts.timestamp}</p>
        
        
        <p></p>
      </div>
    </div>
  
    <div class="text-area">
                    <p>${data.posts.text}</p>

    </div>
  
  <div class='images-div'>
        <img src="${data.posts.url}" alt="" class='userDP'>
  </div>
    <div class="actions">
      <button class="like-button">Like</button>
      <button class="comment-button">Comment</button>
      <button class="share-button">Share</button>
    </div>
  </div>`
        })
    })
}

getPosts()