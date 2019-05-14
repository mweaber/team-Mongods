// import GoogleLogin from 'react-google-login';
// import App from "../App";
import React, { Component } from "react";
// import Axios from 'axios';



class LoginButton extends Component {
    constructor(props) {
      super(props)
      this.url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://comic-shopper.herokuapp.com'
    }

    render() {
        return (
            <div>
                {this.props.loggedIn
                    ? <a href={`${this.url}/api/auth/logout/`} className="btn-small grey dark-1">Logout</a>
                //     : <GoogleLogin
                //         clientId="76521146114-75a1tkldbt9tr9thhf8a604ut9fvpoie.apps.googleusercontent.com"
                //         buttonText="Login with Google"
                //         style={{ float: "right" }}
                //         onSuccess={this.props.responseGoogle}
                //         onFailure={this.props.responseGoogle} />
                // }
                :<a href={`${this.url}/api/auth/google/`} className="btn-small grey dark-1"><i className="fab fa-google-plus" style={{paddingRight: "10px"}}></i>Google Login Button</a>}
                {/* :<a href={"#"} onClick={this.login} className="btn">Google Login Button</a>} */}
            </div>
        )
    }

}
export default LoginButton;

