import React, { Component } from "react";
import ComicSearch from "./ComicSearch"
import comicAPI from "../util/comicAPI";

class Characters extends Component {
    state = {
        search: "wolverine",
        result: []
    };

    handleInputChange = e => {
        //    console.log(e.target);
           const {name, value} = e.target;
           this.setState({
               [name]: value
           });
        //    console.log(this.state);
       };

       handleResults() {
        this.items = this.state.result.data;
        this.items.forEach(one => {
           console.log(one.title);
        //    console.log(one.location);
        //    console.log(one.galleryURL);
        //    console.log(one.viewItemURL);
         });
    }

    handleFormSubmit = e => {
        console.log("PRESS BUTAN HAPPEND")
        console.log(this.state)
        e.preventDefault();
     //    console.log(this.state.search);
        comicAPI.findCharacter(this.state.search).then((result) =>  {
             this.setState({
                 result:result
             })
             console.log(this.state.result)
        }).catch( (err) => {
            console.log(err);
        })
    };

    render() {
        return(
            <div>
            
                <div className="col s12">
                    <ComicSearch search ={this.state.search} handleInputChange ={this.handleInputChange}
                    handleFormSubmit = {this.handleFormSubmit}/>
                </div>

                <div className="col s12">
                    {/* Lets add the results cards down here under the search. */}
                    <p items = {this.handleResults}></p>
                </div>
            </div>
        );
    }
}

export default Characters;