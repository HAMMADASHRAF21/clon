import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtmiA_flId_184BUVJalvRxu3OOK7gYpo",
  authDomain: "fir-32cb4.firebaseapp.com",
  databaseURL: "https://fir-32cb4.firebaseio.com",
  projectId: "fir-32cb4",
  storageBucket: "fir-32cb4.appspot.com",
  messagingSenderId: "172122140280",
  appId: "1:172122140280:web:11c640647d1b4a455c478d",
  measurementId: "G-WR543ZBSZG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.firestore();


export {db, auth ,  firebase}  ;
