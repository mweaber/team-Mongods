import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {

        const sectionStyle={
            backgroundColor: "#294F52",
            minHeight: "500px",
            paddingBottom: "100px"
        }
        return (
            <div>
                <nav>
                    <div className="nav-wrapper" style={{sectionStyle}}>
                    <Link to ="/"><a href="" className="brand-logo">&nbsp;Comics and things</a></Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                        <ul className="right hide-on-small-and-down">
                            <li><Link to = "/login">Welcome User</Link></li>
                            <li><Link to = "/shop">Shop</Link></li>
                            <li><Link to = "/saved">Saved</Link></li>

                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                            <li><Link to = "/login">Welcome User</Link></li>
                            <li><Link to = "/shop">>Shop</Link></li>
                            <li><Link to = "/saved">>Saved</Link></li>
                </ul>
            </div>

        )
    }
}

export default Header;

