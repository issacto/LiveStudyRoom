import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDO3gkZN9igFXWvMidC2ctTEzV5ffVKAdY",
    authDomain: "everyminscount.firebaseapp.com",
    projectId: "everyminscount",
    databaseURL: "https://everyminscount-default-rtdb.firebaseio.com",
    storageBucket: "everyminscount.appspot.com",
    messagingSenderId: "615399682992",
    appId: "1:615399682992:web:ba6a1618d102f02cb3dc75",
    measurementId: "G-BSTHZN090Q"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
export  var db = firebase.firestore();
export var fbProvider = new firebase.auth.FacebookAuthProvider();
export var ghProvider = new firebase.auth.GithubAuthProvider();
export var provider = new firebase.auth.GoogleAuthProvider();

