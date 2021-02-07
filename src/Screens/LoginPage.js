import React, { Component } from "react";
import VideoChat from "../Components/VideoChat/VideoChat.js";
import firebaseApp,{provider,fbProvider,ghProvider} from "../Components/Firebase/firebase"
import PropTypes from "prop-types";
import "firebase/auth";
import history from "../history";
import { connect } from 'react-redux';
import store from "../Components/Redux/store"
import {login} from "../Components/Redux/action"
import FbLogo from "../Components/Images/facebook.svg"
import GhLogo from "../Components/Images/github.svg"
import  { ReactComponent as StudyLogo }from"../Components/Images/reading.svg"
import "../stylesheet.css"


class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  login=()=>{
    this.signInWithGoogle();
  }
  signInWithFacebook=()=>{
    firebaseApp.auth()
  .signInWithRedirect(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    console.log(user)
    //store.dispatch(login(user));
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
  }
  signInWithGithub=()=>{
    firebaseApp
  .auth()
  .signInWithPopup(ghProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }

  signInWithGoogle = () => {
    firebaseApp.auth()
   .signInWithPopup(provider)
   .then((result) => {
     console.log(result)
     
      var credential = result.credential;
 
     var user = result.user.displayName;
     store.dispatch(login(user));

     console.log(this.props.login.name);
     
     this.props.history.push("/ChoosePage")
     //this.props.history.go(0)
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
 

  render() {
      
      
  return (
    <div className="main-container">
      <div className="left-container"><br/><br/>
      <StudyLogo fill="white" stroke="rgb(138, 187, 199)" width="80vh"/>
      </div>
      <div className="right-container" style={{ background: "rgb(73, 48, 129)"}}>
      <br/><h1 className="bluewords" style={{ fontWeight:"bold", fontSize:"4.4vh"}}>"Study Room in Your Home"</h1>
      <hr style={{backgroundColor:"rgb(17, 17, 20)", marginBottom:"3vh",marginTop:"2vh"}}></hr>
      <div style={{fontSize:"4vh"}}>
        LiveStudyRoom offers you the unique experience to study with others online.
        The rooms are muted and work like real study rooms. Let's encourage each other during the toughest time.
        <br/> <br/><i className="bluewords">Login with Google/Github/Facebook!</i>
      </div>
        <hr style={{backgroundColor:"rgb(17, 17, 20)", marginBottom:"3vh",marginTop:"3vh"}}></hr>
      
        <div style={{display:"inline"}} onClick={this.signInWithGithub}><img width="36vh" style={{backgroundColor:"white",borderRadius:"50%"}} src={GhLogo}/><p style={{fontSize:"5vh",display:"inline"}}> Github</p></div>
        <div class="hollow button primary" style={{display:"inline",marginLeft:"3vh"}}onClick={this.login}  >
      <img width="32vh" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
      <p style={{fontSize:"5vh", display:"inline"}}> Google</p>
      <div style={{display:"inline",marginLeft:"3vh"}}onClick={this.signInWithFacebook}><img width="32vh" src={FbLogo}/><p style={{fontSize:"4.5vh", display:"inline"}}> Facebook</p></div>
        
        
        
        </div>
        
     
    </div>
    </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    login: state.login
  };
}
// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(LoginPage);