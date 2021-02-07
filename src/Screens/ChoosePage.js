import React, { Component } from "react";
import VideoChat from "../Components/VideoChat/VideoChat.js";
import { connect } from 'react-redux';
import  { ReactComponent as CreateLogo }  from "../Components/Images/create.svg"
import  { ReactComponent as GroupLogo }  from "../Components/Images/group.svg"

class VideoPage extends Component {
  constructor(props) {
    super(props);
    
  }
  createRoom= isSetRoom=>{
    if(isSetRoom) this.props.history.push({  
        pathname: "/VideoPage",
        isSetRoom: true});
    else this.props.history.push({  
      pathname: "/RoomAvailablePage"});
               
}



  render() {
      
      
  return (
      <div className="main-container">
          <div className="left-container">
          <CreateLogo width="60%" fill="black"/>
          <u style={{position:"fixed", fontSize:"7vh",bottom:"50%",alignContent:"row", left: "2%"}} onClick = {()=>this.createRoom(true)}> 
          Join/Make a meeting room
          </u>
          
          </div>
          <div className="right-container">
          <GroupLogo width="86%"fill="grey"/>
              <u style={{position:"fixed",fontWeight:"bold",color:"black", fontSize:"7vh",bottom:"50%",alignContent:"row", right: "5%"}} onClick = {()=>this.createRoom(false)}> 
          Find an existing room
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

export default connect(mapStateToProps)(VideoPage);

/*this.props.history.push({  
        pathname: "/VideoPage",
        isSetRoom: false});*/