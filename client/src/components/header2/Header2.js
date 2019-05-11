import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header2 extends Component {
    render() {

        const sectionStyle ={
            padding: "0px",
            margin: "0px",
            width: "100%",
            height: "100px",
            backgroundColor: "#294F52"
        }
        return(
            <div>
                <div className="container" style={sectionStyle}>
                </div>
            </div>
        )
    }
}


export default Header2;