import React, { Component } from "react";
import ComicSearch from "./ComicSearch"
import comicAPI from "../util/comicAPI";
import CharacterCard from "./CharacterCard";

class Characters extends Component {
    state = {
        search: "",
        result: [],
        image: "",
        res: []
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

    handleFormSubmit2 = e => {
        // console.log("PRESS BUTAN HAPPEND")
        // console.log(this.state)
        e.preventDefault();
        //    console.log(this.state.search);
        comicAPI.findDeadpool()
            .then(res => {
                this.setState({
                    res: res.data.results[0],
                    image: res.data.results[0].image.small_url
                })
                // console.log(this.state.result.aliases)
                // console.log(this.state.result.image.small_url)
            })
            .catch(err => console.log(err))
           
    };
    handleFormSubmit3 = e => {
        
        // console.log(this.state)
        e.preventDefault();
        //    console.log(this.state.search);
        comicAPI.findSpiderman()
            .then(res => {
                this.setState({
                    res: res.data.results[0],
                    image: res.data.results[0].image.small_url
                })
        
            })
            .catch(err => console.log(err))
    };
    handleFormSubmit4 = e => {

        e.preventDefault();
        comicAPI.findRedSonja()
            .then(res => {
                this.setState({
                    res: res.data.results[0],
                    image: res.data.results[0].image.small_url
                })
 
            })
            .catch(err => console.log(err))
        // console.log(comicAPI.test())
        // console.log(this.state.result)      
    };
    handleFormSubmit5 = e => {
          e.preventDefault();
        //    console.log(this.state.search);
        comicAPI.findThanos()
            .then(res => {
                this.setState({
                    res: res.data.results[0],
                    image: res.data.results[0].image.small_url
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
                <div className="row">
                    <div className="col s3 offset-s2">
                        <ComicSearch search={this.state.search} handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit} handleFormSubmit2={this.handleFormSubmit2}
                            handleFormSubmit3={this.handleFormSubmit3} handleFormSubmit4={this.handleFormSubmit4}
                            handleFormSubmit5={this.handleFormSubmit5} />
                    </div>


                    {/* <div className="col s12"> */}
                    {/* Lets add the results cards down here under the search. */}
                    {/* <p>{this.handleResults}</p> */}
                    {/* </div> */}
                    <div className="MakeSmaller col s4" >
                        {/* <h5>{JSON.stringify(this.state.result.count_of_issue_appearances)}</h5> */}
                        <h5>{JSON.stringify(this.state.result.deck)}</h5>
                        <h5>{JSON.stringify(this.state.res.deck)}</h5>
                        <img src={this.state.image}></img>
                    </div>
                </div>

            </div>
        );
    }
}


export default Characters;