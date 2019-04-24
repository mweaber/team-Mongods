import React, { Component } from "react";
import App from "../App";

class InputForm extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                            <input placeholder="Name" id="name" type="text" class="validate" name="first name" />
                            {/* <label for="first name">First Name</label> */}

                            </div>
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}
export default InputForm;
