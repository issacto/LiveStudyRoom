import React, { Component } from "react";
import VideoChat from "../Components/VideoChat/VideoChat.js";
import { connect } from 'react-redux';


class VideoPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.login.name)
    this.state ={
      username: this.props.login.name,
    }
  }



  render() {
    console.log("afeib")
    console.log(",ma fek")
    console.log(this.props.location.isSetRoom)
  
      
      
  return (
      <VideoChat inputUsername={this.state.username} inputIsSetRoom={this.props.location.isSetRoom}/>
    );
  }
}
function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(VideoPage);