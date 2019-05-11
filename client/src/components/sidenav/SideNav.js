import React, { Component } from "react";
// import App from "../../App";

// import SideNavImg from "./1b.jpg"
import SideNavbk from "./sideCovers.jpg"
// import GoogleLogin from "react-google-login";
import LoginButton from "../LoginButton";
import Background2 from "../../images/unsplashBack1-4k.jpg"



const sectionStyle = {
    backgroundImage: `url(${Background2})`,
    backgroundSize: "cover"
}

const containerStyle = {
    paddingLeft: "170px",

}
class SideNav extends Component {
    render() {
        return (
            <div>
                <div>
                <ul id="slide-out" className="sidenav sidenav-fixed" style={{ width: "170px" }}>
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={SideNavbk} />
                            </div>
                            <a href="#user"><img className="circle" src={this.props.photo} /></a>
                            <a href="#name"><span className="white-text name">{this.props.userID}</span></a>
                            {/* <a href="#email"><span className="white-text email">{this.props.email}</span></a> */}
                        </div>
                    </li>
                    {/* <li><a href="#!"><center>Find Items</center></a></li> */}
                    <li><a href="#!"><center>Find local shops</center></a></li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    {/* <li><a className="subheader">Options</a></li> */}
                    <li><a className="waves-effect" href="/">Home</a></li>
                    <li><a className="waves-effect" href="/characters"><center>Who's that hero?</center></a></li>
                    <li><a className="waves-effect" href="#!">Movies</a></li>
                    <li><a className="Waves-effect" href="/shop">eBay Items</a></li>
                    <div className="divider"></div>
                    <li><a className="waves-effect" href="/characters"><center>Profile</center></a></li>
                    <li><a className="waves-effect" href="#!"><center>Registered Pieces</center></a></li>
                    <li><a className="Waves-effect" href="/shop"><center>PO List</center></a></li>
                    <li><center><LoginButton loggedIn={this.props.loggedIn} logout={this.props.logout} userID={this.props.userID} email={this.props.email} responseGoogle={this.props.responseGoogle} /></center></li>
                </ul>
                </div>
             
                {/* <div style={sectionStyle}>
                    <div style={containerStyle}>
                    </div>
                    
                </div> */}
            </div>
        )
    }
}

export default SideNav;
