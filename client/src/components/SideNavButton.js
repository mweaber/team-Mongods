import React, { Component } from "react";

// const sectionStyle = {
//     background: null
// }

class SideNavButton extends Component {
   




    render() {
        return (
            <div>
                
                <a href="#" data-target="slide-out" className="sidenav-trigger" onClick={this.props.handleSideNav}><i className="material-icons">menu</i></a>
               
            </div>
        )
    }

}


export default SideNavButton;
