
    import React, { Component } from "react";

    class SearchBar extends Component {
        
        render() {

            const sectionStyle= {
                padding: "100px",
                color: "white"
            }
            return (
                <div>
                    <div className="row">
                        <form className="col s11 offset-s1">
                            <div className="input-field col s12 m5 l5" style={{backgroundColor: "white", padding: "20px", margin: "10px", border: "#4db6ac solid 1px"}}>
                                <input id="name" type="text" className="validate" 
                                        value = {this.props.search}
                                        onChange={this.props.handleInputChange}
                                        name="search"
                                        placeholder = "Enter Search Term for Ebay" />
                                <label for="name"></label>
                                {/* Look into onClick vs onSubmit */}
                                <button className="searchButton btn grey dark-1" onClick = {this.props.handleFormSubmit}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    export default SearchBar;