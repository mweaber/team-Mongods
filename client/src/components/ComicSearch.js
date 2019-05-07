
    import React, { Component } from "react";

    class ComicSearch extends Component {
        render() {
            return (
                <div>
                    <div className="row">
                        <form className="col s6 offset-s4">
                            <div className="input-field col s5">
                                <input id="name" type="text" className="validate" 
                                        value = {this.props.search}
                                        onChange={this.props.handleInputChange}
                                        name="search"
                                        placeholder = "Enter a Character Name" />
                                <label htmlFor="name">Search</label>
                                {/* Look into onClick vs onSubmit */}
                                <button className="searchButton" onClick = {this.props.handleFormSubmit}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }

    export default ComicSearch;