import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header2 extends Component {
    render() {

        const sectionStyle = {
            padding: "0px",
            margin: "0px",
            width: "100%",
            height: "80px",
            // backgroundColor: "#294F52",
            zIndex: "2",
            position: "absolute",
            border: "black solid 1px"
        }
        return (
            <div>
                <div style={sectionStyle}>
                    <div class="wrapper">

                        <div class="flex-nav" style={{backgroundColor: "none"}}>
                            <ul>
                                <li><a href="#">Item 01</a></li>
                                <li><a href="#">Item 02</a></li>
                                <li><a href="#">Item 03</a></li>
                                <li><a href="#">Item 04</a></li>
                                <li><a href="#">Item 05</a></li>
                                <li><a href="#">Item 06</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Header2;