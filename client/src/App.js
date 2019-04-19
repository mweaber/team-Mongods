import React, { Component } from "react";
import Header from "../components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header />
        </div>
        <div className = "body">
          <h2>Body and things to work on:</h2>
          <ul>
            <li>Get comic API</li>
            <li>Get the eBay API</li>
            <li>Set up routes</li>
            <li>Make a fav search</li>
            <li>Maybe some games or little time wasters</li> 
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
