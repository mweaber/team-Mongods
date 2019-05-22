import React, { Component } from "react"
import "./Banner.css"
// import SideNavButton from "../SideNavButton"
import Header2 from "../header2/Header2"



class Banner extends Component {
    render() {
        return (
            <div>
                
                <div className="banner-image">
                <Header2 sNav={this.props.sNav} handleSideNav={this.props.handleSideNav} loggedIn={this.props.loggedIn} logout={this.props.logout} userID={this.props.userID} email={this.props.email} photo={this.props.photo}/>
                {/* <SideNavButton sNav={this.props.sNav} handleSideNav={this.props.handleSideNav}/> */}
              
                {/* <div className="banner-text"></div> */}

                </div>
            </div>
        )
    }
}

export default Banner;