import React, { Component } from "react";
import API from "../util/API";
// import SideNav from "./sidenav/SideNav";


// general card , could add slider
// build out with props & Json to be replaced later by scraped info

class ItemCard extends Component {

    render() {
        return (
            <div>
                {/* <div className="row"> */}
                    <div className="col s2">
                        <div className="card" >
                            <div className="card-image">
                                <img alt={this.props.name} src={this.props.image} />
                                <span className="card-title">{this.props.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{this.props.alt}</p>
                            </div>
                            <div className="card-action">
                                <a href="#">{this.props.link}</a>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

                


        );
    }
}

export default ItemCard;
