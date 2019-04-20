import React, { Component } from "react";
import "./App";
import ComicCard from "./components/ComicCard";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
        <Login />
        </div>
        <div className="row">
          <div className="col s8 m8 l8">
            <ComicCard />
          </div>
          <div className="col s2 m2 l2">
            <Card />
            <Card />

          </div>
          <div className="col s2 m2 l2">
            <Card />
            <Card />

          </div>


        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
