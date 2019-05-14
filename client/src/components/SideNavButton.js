import React, { Component } from "react";

const sectionStyle={
    zIndex: "1",
    position: "absolute"
}

class SideNavButton extends Component {
   //this menu icon renders in the upper left corner on page load

    render() {
        return (
            <div>
                <a data-target="slide-out" className="sidenav-trigger" style={{sectionStyle}} onClick={this.props.handleSideNav}><i className="material-icons gray dark-1">menu</i></a>
            </div>
        )
    }

}


export default SideNavButton;
