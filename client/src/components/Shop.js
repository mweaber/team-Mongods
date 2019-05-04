import React, { Component } from "react";
import SearchBar from "./SearchBar"
import API from "../util/API";


class Shop extends Component {
    state = {
        search: "test",
        result: []
    };
 
//    componentDidMount() {
//     API.findItemsByKeywords().then(test => {
//         console.log(test);
//     })
//    };

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
          console.log(one.location);
          console.log(one.galleryURL);
          console.log(one.viewItemURL);
        });
   }
      

   handleFormSubmit = e => {
       e.preventDefault();
    //    console.log(this.state.search);
       API.findItemsByKeywords(this.state.search).then( (result) =>  {
            this.setState({
                result:result
            })
       }).catch( (err) => {
           console.log(err);
       })
   };

    render() {
        return(
            <div>
            
                <div className="col s12">
                    <SearchBar search ={this.state.search} handleInputChange ={this.handleInputChange}
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



export default Shop;