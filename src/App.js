import React from 'react';
import './App.css';
import VideoPage from "./Screens/VideoPage"
import LoginPage from "./Screens/LoginPage"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Containers/header"
import Footer from "./Components/Containers/footer"
import "./stylesheet.css"
import ChoosePage from "./Screens/ChoosePage";
const App = () => {
  return (
    <div className="Board">
      <Header/>
      <div className="main">
    <Route path="/" component={LoginPage} exact />
    <Route path="/VideoPage" component={VideoPage} exact />
    <Route path="/ChoosePage" component={ChoosePage} exact />
    </div>
    <Footer/>
    </div>
  );
};

export default App;