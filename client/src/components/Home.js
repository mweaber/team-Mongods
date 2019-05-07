import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "../images/wallbackground.jpg"
import Background2 from "../images/unsplashBack1-4k.jpg"
import ComicCard from "./ComicCard";
import Card from "./Card"
import InputForm from "./InputForm"
import Temp from "../placeholder.json"
import Footer from "./Footer"
import SideNav from "./sidenav/SideNav";

const sectionStyle = {
    backgroundImage: `url(${Background2})`
}



class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cards: Temp
    //     }
    // }

    state={
        cards: Temp
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <SideNav loggedIn={this.props.loggedIn} email={this.props.email} userID={this.props.userID} logout={this.props.logout} photo={this.props.photo} responseGoogle={this.props.responseGoogle} />
            
            <div style={ sectionStyle }>
                <div className="row" style={ sectionStyle }>
                </div>
                <div className="row">
                    <div className="col s6 m6 l6">
                        <ComicCard />
                    </div>
                    <div className="col s4">
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
                </div>
                {/* <Footer /> */}
            </div>
            </div>
        )
    }
}

export default Home;