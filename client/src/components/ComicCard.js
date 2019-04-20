import React, { Component } from "react";

// import "./App.css";

//// potential comic card or large format card.
// could be replaced with a parallax setup


class ComicCard extends Component {
    render() {
        return (
            <div>
            
                       <div className="card">
                            <div className="card-image">
                                <img src="./images/harambe.jpg" />
                                <span className="card-title">He is risen</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light grey"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>Harambe smash your hands, Harambe smash your face, Harambe smash your balls into out er space!</p>
                            </div>
                        </div>
                
    
            </div>


        );
    }
}

export default ComicCard;