import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: Yours,
  authDomain: Yours,
  projectId:Yours,
  databaseURL: Yours,
  storageBucket: Yours,
  messagingSenderId:Yours,
  appId: Yours,
  measurementId: Yours,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export  var db = firebase.firestore();
export var fbProvider = new firebase.auth.FacebookAuthProvider();
export var ghProvider = new firebase.auth.GithubAuthProvider();
export var provider = new firebase.auth.GoogleAuthProvider();


