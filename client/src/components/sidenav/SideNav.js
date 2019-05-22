import React, { Component } from "react";
import SideNavbk from "./sideCovers.jpg"
// import LoginButton from "../LoginButton";
import "./SideNavCSS.css"


class SideNav extends Component {
    render() {
        return (
            <div>
                <div>
                <ul id="slide-out" className="sidenav sidenav-fixed" style={{ width: "170px"}}>
                    <li>
                        <div className="user-view" style={{padding: "10px"}}>
                            <div className="background">
                                <img src={SideNavbk} alt="" style={{linearGradient: "rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"}} />
                            </div>

                            {this.props.photo ? <center><a href="#user"><img alt="" className="circle" src={this.props.photo} style={{margin: "0px"}}/></a></center> : <a href="#user"><img alt="" className="circle" /></a>}
                            {/* <a href="#user"><img className="circle" src={this.props.photo} /></a> */}


                            <a href="#name"><span className="white-text name">{this.props.userID}</span></a>
                            <a href="#email"><span className="white-text email" style={{padding: "0px"}}>{this.props.email}</span></a>
                        </div>
                    </li>
                    {/* <li><a href="#!"><center>Find Items</center></a></li> */}
                    {/* <li><a href="#!"><center>Find local shops</center></a></li> */}
                    <li>
                        <div className="divider"></div>
                    </li>
                    {/* <li><a className="subheader">Options</a></li> */}
                    <li><a className="waves-effect" href="/">Home</a></li>
                    <li><a className="waves-effect" href="/characters"><center>Who's that hero?</center></a></li>
                    {/* <li><a className="waves-effect" href="#!">Movies</a></li> */}
                    <li><a className="waves-effect" href="/shop">eBay Items</a></li>
                    <div className="divider"></div>
                    {this.props.userID ? <li><a className="waves-effect" href="/profile"><center>Profile</center></a></li> : null}
                    {this.props.userID ? <li><a className="waves-effect" href="/statueinput"><center>Add Statue</center></a></li> : null}
                    {/* {this.props.userID ? <li><a className="waves-effect" href="#!"><center>Registered Pieces</center></a></li> : null} */}
                    <li><a className="waves-effect" href="/shop"><center>PO List</center></a></li>
                    {/* <li><center><LoginButton loggedIn={this.props.loggedIn} logout={this.props.logout} userID={this.props.userID} email={this.props.email} responseGoogle={this.props.responseGoogle} /></center></li> */}
                    <div className="divider"></div>
                    <li><center><a href="" className="btn-small grey dark-1" onClick={this.props.handleSideNav}>Close SideNav</a></center></li>
                </ul>
                </div>
            
            </div>
        )
    }
}

export default SideNav;
