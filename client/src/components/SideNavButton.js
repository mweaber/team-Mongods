import React, { Component } from "react";

const sectionStyle={
    zIndex: "3",
    position: "absolute",
    top: "10px",
    left: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.5%",
    backgroundColor: "transparent"
}

const BGColor={
    backgroundColor: "transparent"
}

class SideNavButton extends Component {
   //this menu icon renders in the upper left corner on page load

    render() {
        return (
            <div>
                <a id="noBackGround" data-target="slide-out" className="sidenav-trigger btn" style={sectionStyle} onClick={this.props.handleSideNav}><i className="material-icons gray dark-1" >menu</i></a>
            </div>
        )
    }

}


export default SideNavButton;
