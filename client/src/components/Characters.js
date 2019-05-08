import React, { Component } from "react";
import ComicSearch from "./ComicSearch"
import comicAPI from "../util/comicAPI";
import CharacterCard from "./CharacterCard";

class Characters extends Component {
    state = {
        search: "",
        result: [],
        image: ""
    };

    handleInputChange = e => {
        //    console.log(e.target);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        //    console.log(this.state);
    };

    // handleResults() {
    //     this.person = this.state.result;
    //     this.person.forEach(people => {
    //         console.log(people.image)
    // });


    handleFormSubmit = e => {
        // console.log("PRESS BUTAN HAPPEND")
        // console.log(this.state)
        e.preventDefault();
        //    console.log(this.state.search);
        comicAPI.findCharacter(this.state.search)
            .then(result => {
                this.setState({
                    result: result.data.results[0],
                    image: result.data.results[0].image.small_url
                })
                // console.log(this.state.result.aliases)
                // console.log(this.state.result.image.small_url)
            })
            .catch(err => console.log(err))
        // console.log(comicAPI.test())
        // console.log(this.state.result)
       
    };

    

    render() {
        return (
            <div>

                <div className="col s12">
                    <ComicSearch search={this.state.search} handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit} />
                </div>

                <div className="col s12">
                    {/* Lets add the results cards down here under the search. */}
                    {/* <p>{this.handleResults}</p> */}
                </div>
                <div className="MakeSmaller" style={{width:960, float: "right"}}>
                    {/* <h5>{JSON.stringify(this.state.result.count_of_issue_appearances)}</h5> */}
                    <h5>{JSON.stringify(this.state.result.deck)}</h5>
                    {/* <h5>{JSON.stringify(this.state.result.image[0])}</h5> */}
                    <img src={this.state.image}></img>  
                </div>
            </div>
        );
    }
}


    export default Characters;