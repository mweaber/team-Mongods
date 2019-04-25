import React, { Component } from "react";
import Harambe from "../images/harambe.jpg";
import InputForm from "./InputForm"
// import "../materialize.js"

// import "./App.css";

//// potential comic card or large format card.
// could be replaced with a parallax setup

const boxStyle = {
    flexGrow: 1,
    border: "1px blue solid",
    backgroundColor: "white",
    padding: "15px",
    opacity: ".8",
    marginTop: "5px"
}

const mGin0 = {
    margin: "0px"
}

const mGin10 = {
    margin: "10px"
}



class ComicCard extends Component {
    render() {
        return (
            <div>
                <div className="box" style={ boxStyle }>
                        <InputForm  />
                </div>
                {/* <div className="card">
                    <div className="card-image">
                        <img src={Harambe} />
                        <span className="card-title">Replace with input Section?</span>
                        <a href="#" className="btn-floating halfway-fab waves-effect waves-light grey"><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>Where is my inputs</p>
                    </div>
                </div> */}


            </div>


        );
    }
}

export default ComicCard;