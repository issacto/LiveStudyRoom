import React, { Component } from "react";
import VideoChat from "../Components/VideoChat/VideoChat.js";
import signInWithGoogle from "../Components/Firebase/firebase"


class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  login=()=>{
    signInWithGoogle();
  }


  render() {
      
      
  return (
      <button onClick={this.login}>Login With Google</button>
    );
  }
}
export default AboutPage;