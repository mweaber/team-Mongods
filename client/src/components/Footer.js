import React, { Component } from "react";


/// footer is sticky, would be better if fixed - can adjust

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer indigo dark-4">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col l6 s12"> */}
                                <h5 className="white-text">Footer of negotiable content</h5>
                            {/* </div> */}
                            {/* <div className="col l4 offset-l2 s12">
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
    
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Footer;