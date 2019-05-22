import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComicCard from "./ComicCard";
import Card from "./Card"
// import InputForm from "./InputForm"
import Temp from "../placeholder.json"

import API from "../util/API";

const containerStyle = {
    paddingLeft: "0px",

}

class Home extends Component {

    state = {
        cards: Temp
    }

    checkUser() {
        API.checkUser()
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }
    
    render() {
        console.log(this.props)
        return (
            <div>

                <div className="row" style={containerStyle}>
                    <div className="col s12 m6 l6">

                        <ComicCard />
                    </div>
                    <div className="col s12 m5 l5">
                        {
                            this.state.cards.map(card => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    alt={card.name}
                                    image={card.image}
                                    releaseDate={card.releaseDate}
                                    producer={card.producer}
                                    link={card.link}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;