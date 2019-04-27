import React, { Component } from "react";




class Login extends Component {
    render() {
        return(
            <div>
                <h5>Here is some example text of where a user will come to login/signup</h5>
                <p>This shit better work.</p>

                <div className="row">
                    <form className="col s12">

                        <div className="input-field col s5">
                            <input id="name" type="text" className="validate" />
                            <label for="name">First Name</label>
                            {/* <label for="first name">First Name</label> */}

                        </div>
                        <div className="input-field col s5">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>



                        <div className="input-field col s5">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>



                        <div className="input-field col s5">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                        </div>
                        <div className="row">
                        <div className="col s12">
                            {/* <button type="submit" value="Submit" /> */}
                            <button className="btn waves-effect waves-light" type="submit" value="Submit" name="action">Submit
                            <i className="material-icons right">send</i>
                            </button>
                        </div>
                        </div>
                    </form>

                </div>        
            </div>
        );
    }
}



export default Login;