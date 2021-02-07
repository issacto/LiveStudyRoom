import React, { Component } from "react";
import VideoChat from "../Components/VideoChat/VideoChat.js";
import "../stylesheet.css"
import {getUserData} from "../Components/Firebase/action"
import   { ReactComponent as ShuttleLogo }   from "../Components/Images/shuttle.svg"


class RoomAvailablePage extends Component {
  constructor(props) {
    super(props);
    this.state={data:[""],isLoaded:false}
  }
  componentDidMount(){
    getUserData().then(data=>{
      console.log(data)
      this.setState({data:data})
        this.setState({isLoaded:true}
        )}
    )
    
  }
  render(){
      return(
          <div >
              <ShuttleLogo fill="rgb(62, 170, 170)" stroke="rgb(73, 48, 129)"width="80%" height="40%" style={{marginBottom:"10%"}}/>
              <h1>Available Room Numbers:</h1>
            <div className="scrollableBox">
            {
            this.state.isLoaded==true?
            this.state.data.map((data) => (
              <p> {data} </p>
          )) :null
            }
            </div>


          </div>


      )
  }
  
}



export default RoomAvailablePage;