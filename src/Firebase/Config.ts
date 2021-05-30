import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectStore = firebase.firestore();
const auth = firebase.auth();

export { projectStorage, projectStore, auth };
