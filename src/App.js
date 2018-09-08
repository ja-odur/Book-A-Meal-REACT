import React, { Component } from 'react';
import logo from './logo.svg';
import bg from './images/meal_background.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-fluid">Bootstrap trial</div>
        <button className="btn btn-primary btn-lg">trial</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Trial</h1>
        <img src={bg}  alt="logo" />
      </div>
    );
  }
}

export default App;
