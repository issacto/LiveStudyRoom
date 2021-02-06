import React from 'react';
import './App.css';
import VideoPage from "./Screens/VideoPage"
import LoginPage from "./Screens/LoginPage"
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
    <Route path="/" component={LoginPage} exact />
    <Route path="/VideoPage" component={VideoPage} exact />
    
    </Switch>
  );
};

export default App;