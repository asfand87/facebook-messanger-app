import firebase from "firebase";

const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9TULqDsSu4Hhae6r3xhjJhHlhAsmUI-s",
    authDomain: "facebook-messanger-clone-db375.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-db375.firebaseio.com",
    projectId: "facebook-messanger-clone-db375",
    storageBucket: "facebook-messanger-clone-db375.appspot.com",
    messagingSenderId: "946201443090",
    appId: "1:946201443090:web:e9b8118e7d6cc44baa51cb",
    measurementId: "G-JC5EEQKXZ3"
  });

  const db = firebaseApp.firestore();
  export default db;