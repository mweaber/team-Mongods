import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Background from "../images/wallbackground.jpg"
import Background2 from "../images/unsplashBack1-4k.jpg"
import ComicCard from "./ComicCard";
import Card from "./Card"
// import InputForm from "./InputForm"
import Temp from "../placeholder.json"
// import Footer from "./Footer"
import SideNav from "./sidenav/SideNav";
import API from "../util/API";
import Header from "./Header"
import SideNavButton from "./SideNavButton";

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
                <div>
                </div>
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