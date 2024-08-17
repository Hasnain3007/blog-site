import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { signupUserName } from "signup.js";
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
const storage = getStorage(app);
const db = getFirestore(app);

const uploadFile = document.querySelector('.submitbtn');
let loader = document.getElementById('loader')

let showLoader = () => {
  loader.classList.remove('loader-none')
    loader.classList.add('loading-wave')
}
let HideLoader = () => {
    loader.classList.remove('loading-wave')
    loader.classList.add('loader-none')
}

uploadFile.addEventListener('click', (event) => {
  event.preventDefault();
  showLoader()
  
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];
  const textarea = document.getElementById('textarea')
  const postStorageRef = ref(storage, file.name);
  uploadBytes(postStorageRef, ref(storage, file.name))
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    })
    .then((downloadURL) => {
      console.log('File available at', downloadURL);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(user);
          return addDoc(collection(db, "UserPosts"), {
            userName:signupUserName,
            userUid: uid,
            url: downloadURL,
            posts: {text: textarea.value , file: file.name,timestamp: new Date().toLocaleTimeString(),},
          });
          window.location.href = '../index.html'
        } else {
          alert('masla arha ha')
        }
      });
     
    })
    .then(() => {
        
      HideLoader()
    })
    .catch((e) => {
       alert(e.message)
       alert('masla ')
  });
    HideLoader()
});




