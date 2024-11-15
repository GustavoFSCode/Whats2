import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCZZxcDw878_idGFSMPsPW7TukVWY5vZSE",
    authDomain: "chat-app2-c8582.firebaseapp.com",
    projectId: "chat-app2-c8582",
    storageBucket: "chat-app2-c8582.firebasestorage.app",
    messagingSenderId: "728324388587",
    appId: "1:728324388587:web:9f469af0973801775c70ae"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth, db };