import React, { Component } from "react";
import SearchBar from "./SearchBar"
import API from "../util/API";
// import SideNav from "./sidenav/SideNav";
import ItemCard from "./ItemCard";


class Shop extends Component {
    state = {
        search: "iphone",
        result: []
    };

    //    componentDidMount() {
    //     API.findItemsByKeywords().then(test => {
    //         console.log(test);
    //     })
    //    };

    handleInputChange = e => {
        //    console.log(e.target);
        const { name, value } = e.target;
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
        API.findItemsByKeywords(this.state.search).then((result) => {
            this.setState({
                result: result.data
            })
            console.log(this.state.result)

            // console.log(result.data)
        }).catch((err) => {
            console.log(err);
        })
    };

    render() {
        return (
            <div>
                {/* <SideNav loggedIn={this.props.loggedIn} email={this.props.email} userID={this.props.userID} logout={this.props.logout} photo={this.props.photo} responseGoogle={this.props.responseGoogle} /> */}
                <div className="col s6">
                    <SearchBar search={this.state.search} handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit} />
                </div>

                <div className="col s6">
                    {/* Lets add the results cards down here under the search. */}
                    {/* <p items={this.handleResults}></p> */}
                </div>
                <div className="row">

                    {this.state.result.map(item => (
                        <ItemCard
                            key={item.itemId}
                            image={item.galleryURL}
                            location={item.location}
                            title={item.title}
                            link={item.viewItemURL}
                        />))}
                </div>
            </div>
        );
    }
}



export default Shop;