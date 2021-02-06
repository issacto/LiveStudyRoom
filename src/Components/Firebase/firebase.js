import firebase from "firebase/app";
import "firebase/auth";
import history from "../../history"

const firebaseConfig = {
    apiKey: "AIzaSyDO3gkZN9igFXWvMidC2ctTEzV5ffVKAdY",
    authDomain: "everyminscount.firebaseapp.com",
    projectId: "everyminscount",
    storageBucket: "everyminscount.appspot.com",
    messagingSenderId: "615399682992",
    appId: "1:615399682992:web:ba6a1618d102f02cb3dc75",
    measurementId: "G-BSTHZN090Q"
  };
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();


 const signInWithGoogle = () => {
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result)
    history.push("/VideoPage")
    history.go(0)
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    
    console.log("HIHI");
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(">OLO");
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  };

export default signInWithGoogle