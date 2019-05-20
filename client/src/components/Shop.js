import React, { Component } from "react";
import SearchBar from "./SearchBar"
import API from "../util/API";
import ItemCard from "./ItemCard";



const containerStyle = {
    paddingLeft: "170px",

}

class Shop extends Component {
    state = {
        search: "",
        result: []
    };

    componentDidMount() {
        API.findItemsByKeywords().then(test => {
            console.log(test);
        })
    };

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

    handleSave = e => {
        e.preventDefault()
        const dat = e.target.dataset;

        const newEbay = {
            link: dat.link,
            title: dat.title,
            image: dat.image,

        }

        API.saveNewEbay(newEbay)
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
    }


    handleFormSubmit = e => {
        e.preventDefault();
           console.log(this.state.search);
        API.findItemsByKeywords(this.state.search).then((result) => {
            console.log(result.data);
            this.setState({
                result: result.data
            })
            console.log(result.data)
        }).catch((err) => {
            console.log(err);
        })
    };

    render() {
        return (
            <div>
                    <div style={containerStyle}>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <SearchBar search={this.state.search} handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit} />
                        </div>

                        <div className="row">
                            <div className="col s12 m1 l1">
                            </div>
                            <div className="col s12 m11 l11">
                                {this.state.result.map(item => (
                                    <ItemCard
                                        key={item.itemId}
                                        image={item.galleryURL}
                                        location={item.location}
                                        title={item.title}
                                        link={item.viewItemURL}
                                        handleSave={this.handleSave}
                                    />))}
                            </div>
                        </div>
                    </div>
              
            </div>
        );
    }
}



export default Shop;