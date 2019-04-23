import React, { Component } from "react";
import "./App.css";
// import Background from "./pencilbkgrnd.jpg";
import ComicCard from "./components/ComicCard";
import Card from "./components/Card";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Temp from "./placeholder.json";

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
        <div>
        <div>

          <Header />
          <div className="row">
            <Login />
          </div>
          <div className="row">
            <div className="col s8 m8 l8">
            <div className="container">
              <ComicCard />
            </div>
            </div>
            <div className="col s4 m4 l4">
            
              {
                this.state.cards.map(card => (
                <Card
                  key={card.id}
                  id={card.id}
                  alt={card.name}
                  image={card.image}
                />
              ))
            }

            </div>

            <div className="body">
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
          <Footer />

        </div>
        </div>
    );
  }
}

export default App;      


