import React, { Component } from "react";


/// footer is sticky, would be better if fixed - can adjust

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer black">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content - irrelevant at this time</h5>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Footer;