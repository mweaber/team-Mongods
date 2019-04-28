import React, { Component } from "react";
import InputForm from "./InputForm"

class Shop extends Component {
    render() {
        return(
            <div>
                <h5>Here will be a api call to eBay to search for comics to buy</h5>
                <p>I would also like to add in a yelp/google maps type section to find local shops.</p> 
                <div className="col s12">
                        <InputForm />
                    </div>
            </div>
        );
    }
}



export default Shop;