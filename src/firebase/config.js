import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyA6o9UPEbaii0pv_JoL1ahfsGHmEYb_5Zg",
    authDomain: "gallery-app-3336f.firebaseapp.com",
    projectId: "gallery-app-3336f",
    storageBucket: "gallery-app-3336f.appspot.com",
    messagingSenderId: "524208405992",
    appId: "1:524208405992:web:4d81d539137128ff0df85d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  const projectStorage = firebase.storage();
  const projectStore  = firebase.firestore();
  const auth = firebase.auth();

  export { projectStorage , projectStore, auth};