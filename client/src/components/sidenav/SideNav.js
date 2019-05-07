import React, { Component } from "react";
import App from "../../App";
import SideNavCSS from "./SideNavCSS.css";
import SideNavImg from "./1b.jpg"
import SideNavbk from "./sideCovers.jpg"
import GoogleLogin from "react-google-login";
import LoginButton from "../LoginButton";

class SideNav extends Component {
  
    render() {
        console.log(this.props.loggedIn + "sidenav props are happening");
        return (
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed" style={{ width: "190px" }}>
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={SideNavbk} />
                            </div>
                            <a href="#user"><img className="circle" src={this.props.photo} /></a>
                            <a href="#name"><span className="white-text name">{this.props.userID}</span></a>
                            <a href="#email"><span className="white-text email">{this.props.email}</span></a>
                        </div>
                    </li>
                    <li><a href="#!">Find Relevant Items</a></li>
                    <li><a href="#!">Find local shops</a></li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li><a className="subheader">Character Bio</a></li>
                    <li><a className="waves-effect" href="#!">Appearances</a></li>
                    <li><a className="waves-effect" href="#!">Movies</a></li>
                    <li><a className="Waves-effect" href="/shop">eBay Items</a></li>
                    <li><LoginButton loggedIn={this.props.loggedIn} logout={this.props.logout} userID={this.props.userID} email={this.props.email} responseGoogle={this.props.responseGoogle} /></li>

                </ul>

                {/* <LoginButton loggedIn={this.props.loggedIn}/> */}
                {/* <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a> */}
            </div>
        )
    }
}

export default SideNav;