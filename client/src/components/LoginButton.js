import GoogleLogin from 'react-google-login';
// import App from "../App";
import React, { Component } from "react";


class LoginButton extends Component {
    render() {
        return (
            <div>
                {this.props.loggedIn
                    ? <button onClick={(e) => this.props.logout(e)}>Logout</button>
                //     : <GoogleLogin
                //         clientId="76521146114-75a1tkldbt9tr9thhf8a604ut9fvpoie.apps.googleusercontent.com"
                //         buttonText="Login with Google"
                //         style={{ float: "right" }}
                //         onSuccess={this.props.responseGoogle}
                //         onFailure={this.props.responseGoogle} />
                // }
                :<a href={`http://localhost:3001/auth/google/`} className="btn">Google Login Button</a>}
            </div>
        )
    }

}
export default LoginButton;

