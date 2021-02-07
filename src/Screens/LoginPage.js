import React, { Component } from "react";
import VideoChat from "../Components/VideoChat/VideoChat.js";
import firebaseApp,{provider} from "../Components/Firebase/firebase"
import PropTypes from "prop-types";
import "firebase/auth";
import history from "../history";
import { connect } from 'react-redux';
import store from "../Components/Redux/store"
import {login} from "../Components/Redux/action"

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  login=()=>{
    this.signInWithGoogle();
  }

  signInWithGoogle = () => {
    firebaseApp.auth()
   .signInWithPopup(provider)
   .then((result) => {
     console.log(result)
     
      var credential = result.credential;
 
     /**This gives you a Google Access Token. You can use it to access the Google API.
     var token = credential.accessToken;
      The signed-in user info.*/
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
      <div class="hollow button primary" onClick={this.login}  >
      <img width="30vh" style={{marginNottom:"3px", marginRight:"5px"}} alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
      <p style={{fontSize:"5vh", display:"inline"}}>Sign in with Google</p>
      <p>{console.log(this.props.login.name)}</p>
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