import React, { Component } from "react";

// general card , could add slider
// build out with props & Json to be replaced later by scraped info

class Card extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img alt="hulk 181" src="./images/hulk181.jpg" />
                        <span className="card-title ">Old Classics</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light grey"><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>Hulk 181 sales --- eBay?</p>
                    </div>
                </div>
            </div>


        );
    }
}

export default Card;