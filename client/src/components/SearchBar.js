import React, { Component } from "react";

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s5">
                            <input id="name" type="text" className="validate" />
                            <label for="name">Search</label>
                            <button className="searchButton">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SearchBar;