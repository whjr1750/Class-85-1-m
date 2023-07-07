import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAeu6hSgOdx9Q5hTHxIgqm_g-QKb6_UCMg",
  authDomain: "e-libary-f740c.firebaseapp.com",
  projectId: "e-libary-f740c",
  storageBucket: "e-libary-f740c.appspot.com",
  messagingSenderId: "436758337961",
  appId: "1:436758337961:web:6079c896caf46955a70cb8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
