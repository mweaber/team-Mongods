import React, { Component } from "react";
import SearchBar from "./SearchBar"
import API from "../util/API";


class Shop extends Component {
    state = {
        query: ""
    };
 
   componentDidMount() {
    API.findItemsByKeywords().then(test => {
        console.log(test);
    })
   };

   handleInputChange = e => {
       const {name, value} = e.target;
       this.setState({
           [name]: value
       });
   };

   handleFormSubmit = e => {
       e.preventDefault();
       API.findItemsByKeywords(this.state.search);
   };

    render() {
        return(
            <div>
                <h5>Here will be a api call to eBay to search for comics to buy</h5>
            
                <div className="col s12">
                    <SearchBar 
                        // query={this.state.query}
                        value = {this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder = "Whatchu lookin' fer?"
                    />
                </div>

                <div className="col s12">

                </div>
            </div>
        );
    }
}



export default Shop;