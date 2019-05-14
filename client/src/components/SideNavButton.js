import React, { Component } from "react";

class SideNavButton extends Component {
   //this menu icon renders in the upper left corner on page load
    render() {
        return (
            <div>
                <a data-target="slide-out" className="sidenav-trigger" onClick={this.props.handleSideNav}><i className="material-icons">menu</i></a>
            </div>
        )
    }

}


export default SideNavButton;
