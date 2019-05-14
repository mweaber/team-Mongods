import React, { Component } from "react"
import "./Banner.css"
import SideNavButton from "../SideNavButton"


class Banner extends Component {
    render() {
        return (
            <div>
                
                <div className="banner-image">
                <SideNavButton sNav={this.props.sNav} handleSideNav={this.props.handleSideNav}/>
                {/* <div className="banner-text"></div> */}

                </div>
            </div>
        )
    }
}

export default Banner;