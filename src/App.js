import React,{Component} from 'react';
import './App.css';
import VideoPage from "./Screens/VideoPage"
import LoginPage from "./Screens/LoginPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Containers/header"
import Footer from "./Components/Containers/footer"
import "./stylesheet.css"
import { connect } from 'react-redux';
import logoutLogo from "./Components/Images/logout.svg"
import store from "./Components/Redux/store"
import {logout} from "./Components/Redux/action"

import ChoosePage from "./Screens/ChoosePage";
class App extends Component{
  render(){
  return (
    <div className="Board">
       {this.props.login.name==""?null:<img className="logoutButton"src ={logoutLogo} onClick={()=> store.dispatch(logout())}/>}
    <Header/>
    <div className="main">
      {console.log(this.props.login.name)}
      {this.props.login.name==""?
      <>
    <Route path="/" component={LoginPage} exact />
    <Route path="/VideoPage" component={LoginPage} exact />
    <Route path="/ChoosePage" component={LoginPage} exact />
    </>:
    <>
     
    <Route path="/" component={ChoosePage} exact />
    <Route path="/VideoPage" component={VideoPage} exact />
    <Route path="/ChoosePage" component={ChoosePage} exact />
    </>
    }
    </div>
    <Footer/>
    </div>
  );}
  
}
function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(App);