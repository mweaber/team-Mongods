import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ComicCard from "./ComicCard";
import Card from "./Card"

import Footer from "./Footer"

class Home extends Component {
    render () {
        return(
                <div>
                    <div className="row">
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
        )}   
}

export default Home; 

