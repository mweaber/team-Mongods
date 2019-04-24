import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  indigo dark-4">
                    <Link to ="/"><a href="" className="brand-logo">&nbsp;Harambooks Mockup</a></Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to = "/login"><a href="">Welcome User</a></Link></li>
                            <li><Link to = "/shop"><a href="">Shop</a></Link></li>
                            <li><Link to = "/saved"><a href="">Saved</a></Link></li>
                            <li><a href="">Logout</a></li>
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

