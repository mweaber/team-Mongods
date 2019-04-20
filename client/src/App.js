import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Saved from "./components/Saved";
import Shop from "./components/Shop";



class App extends Component {
  render() {
    return (
      <Router>
        <Header/>

        <div>

          <Route exact path= "/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/shop" component={Shop} />

        </div>
        
      </Router>
    );
  }
}

export default App;      


