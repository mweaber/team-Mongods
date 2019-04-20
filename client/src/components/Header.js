import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey dark-5">
                        <a href="#" className="brand-logo">&nbsp;Harambooks Mockup</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="">Welcome User</a></li>
                            <li><a href="">Shit</a></li>
                            <li><a href="">Saved</a></li>
                            <li><a href="">Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Header;