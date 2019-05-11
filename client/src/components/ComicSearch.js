
    import React, { Component } from "react";

    class ComicSearch extends Component {
        render() {
            return (
                <div>
                    {/* <div className="row"> */}
                        <form className="col s12">
                            <div className="input-field col s12">
                                <input id="name" type="text" className="validate" 
                                        value = {this.props.search}
                                        onChange={this.props.handleInputChange}
                                        name="search"
                                        placeholder = "Enter a Character Name" />
                                <label htmlFor="name"></label>
                                {/* Look into onClick vs onSubmit */}
                                <button className="searchButton btn grey dark-1" style={{marginLeft: "5px", marginBottom: "5px"}} onClick = {this.props.handleFormSubmit}>Search</button>
                                <button className="searchButton btn grey dark-1" style={{marginLeft: "5px", marginBottom: "5px"}} onClick = {this.props.handleFormSubmit2}>Deadpool</button>
                                <button className="searchButton btn grey dark-1" style={{marginLeft: "5px", marginBottom: "5px"}} onClick = {this.props.handleFormSubmit3}>Spider-man</button>
                                <button className="searchButton btn grey dark-1" style={{marginLeft: "5px", marginBottom: "5px"}} onClick = {this.props.handleFormSubmit4}>Red Sonja</button>
                                <button className="searchButton btn grey dark-1" style={{marginLeft: "5px", marginBottom: "5px"}} onClick = {this.props.handleFormSubmit5}>Thanos</button>
                            </div>
                        </form>
                    {/* </div> */}
                </div>
            )
        }
    }

    export default ComicSearch;