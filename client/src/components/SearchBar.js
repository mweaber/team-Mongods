
    import React, { Component } from "react";

    class SearchBar extends Component {
        render() {
            return (
                <div>
                    <div className="row">
                        <form className="col s6 offset-s1">
                            <div className="input-field col s5" style={{backgroundColor: "white"}}>
                                <input id="name" type="text" className="validate" 
                                        value = {this.props.search}
                                        onChange={this.props.handleInputChange}
                                        name="search"
                                        placeholder = "Enter Search Term for Ebay" />
                                <label for="name"></label>
                                {/* Look into onClick vs onSubmit */}
                                <button className="searchButton btn" onClick = {this.props.handleFormSubmit}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    export default SearchBar;