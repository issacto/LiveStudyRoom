import React, { Component } from "react";
import VideoChat from "../Components/VideoChat/VideoChat.js";
import { connect } from 'react-redux';


class VideoPage extends Component {
  constructor(props) {
    super(props);
    
  }
  createRoom= isSetRoom=>{
    if(isSetRoom) this.props.history.push({  
        pathname: "/VideoPage",
        isSetRoom: true});
    else this.props.history.push({  
        pathname: "/VideoPage",
        isSetRoom: false});
               
}



  render() {
      
      
  return (
      <div className="main-container">
          <div className="left-container">

          <u style={{position:"fixed", fontSize:"6vh",bottom:"50%",alignContent:"row", left: "10%"}} onClick = {()=>this.createRoom(true)}> 
          Create a new room
          </u>
          
          </div>
          <div className="right-container">
              <u style={{position:"fixed", fontSize:"6vh",bottom:"50%",alignContent:"row", right: "10%"}} onClick = {()=>this.createRoom(false)}> 
          Into an exiting one
          </u>
          </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    name: state.name
  };
}

// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(VideoPage);