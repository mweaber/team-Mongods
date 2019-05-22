// import GoogleLogin from 'react-google-login';
// import App from "../App";
import React, { Component } from "react";
// import Axios from 'axios';

const sectionStyle={
    backgroundColor: "transparent"
}

class LoginButton extends Component {
    constructor(props) {
      super(props)
      this.url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://comic-shopper.herokuapp.com'
    }

    render() {
        return (
            <div>
                {this.props.loggedIn
                    ? <a href={`${this.url}/api/auth/logout/`} className="btn-small" style={sectionStyle}>Logout</a>
  
                :<a href={`${this.url}/api/auth/google/`} className="btn-small" style={sectionStyle}><i className="fab fa-google-plus" style={{paddingRight: "10px"}}></i>Google Login</a>}

            </div>
        )
    }

}
export default LoginButton;

