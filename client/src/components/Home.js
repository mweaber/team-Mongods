import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComicCard from "./ComicCard";
import Card from "./Card"
// import InputForm from "./InputForm"
import Temp from "../placeholder.json"
// import Footer from "./Footer"
import API from "../util/API";
import Banner from "./banner/Banner"

// const sectionStyle = {
//     backgroundImage: `url(${Background2})`,
//     backgroundSize: "cover"
// }

const containerStyle = {
    paddingLeft: "170px",

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
                    <div className="col s12 m4 l4">
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
                        {/* <SideNavButton /> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;