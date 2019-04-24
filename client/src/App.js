import React, { Component } from "react";
import "./App.css";
// import Background from "./pencilbkgrnd.jpg";
import ComicCard from "./components/ComicCard";
import Card from "./components/Card";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Temp from "./placeholder.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./components/Saved";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";


// var sectionStyle = {
//   width: "100%",
//   backgroundImage: "url(" + { Background } + ")"
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cards: Temp
    };
  }
  render() {
    return (
      <Router>
        <Header/>
        <div>
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/shop" component={Shop} />
            <Route component = {ErrorPage} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;      


