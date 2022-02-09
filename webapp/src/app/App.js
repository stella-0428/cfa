import React, { Component } from 'react'
import './App.css';
import AppRouter from './app-router';
import { ToastContainer, Slide, toast } from 'react-toastify';
import { appConstants } from './_shared/config/app.config';
import { BrowserRouter as Router } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import 'react-toastify/dist/ReactToastify.css';


@inject("userStore")
@observer
class App extends Component {

  constructor(props) {
    super(props);
    this.userStore = props.userStore;
    this.userStore.email = "RSRC TESTING EMAIL...";
    this.state = {
      loadApp: false
    };
  }

  render() {
    console.log(appConstants.urls);
    return (
      <Router>
        <AppRouter />
        <ToastContainer draggable={false} transition={Slide} />
      </Router>
    );
  }
}

export default App;
