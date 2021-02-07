import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history'
import { Provider } from 'react-redux';
import store from "../src/Components/Redux/store"
import { BrowserRouter as Router} from "react-router-dom";

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
  <App />
</Router></Provider>,
  rootElement
)

