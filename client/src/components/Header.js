import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey dark-5">
                       <Link to ="/"><a href="" className="brand-logo">&nbsp;Harambooks Mockup</a></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to = "/login"><a href="">Welcome User</a></Link></li>
                            <li><Link to = "/shop"><a href="">Shop</a></Link></li>
                            <li><Link to = "/saved"><a href="">Saved</a></Link></li>
                            <li><a href="">Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Header;