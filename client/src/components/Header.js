import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  indigo dark-4">
                        <a href="#" className="brand-logo">&nbsp;Comics and Things TBD</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>


                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="">Welcome User</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Help</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                <li><a href="">Welcome User</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Help</a></li>
                </ul>
            </div>

        )
    }
}

export default Header;

