import React, { Component } from "react";
// import API from "../util/API";
// import SideNav from "./sidenav/SideNav";


// general card , could add slider
// build out with props & Json to be replaced later by scraped info

class ItemCard extends Component {




    render() {
        return (
            <div>
                {/* <div className="row"> */}
                <div className="col s12">
                    <div className="card" >
                        <div className="card-image">
                            <img alt={this.props.name} src={this.props.image} />
                            <span className="card-title">{this.props.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{this.props.alt}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">{this.props.link}</a><br></br>
                            <button
                                className="Waves-effect waves-light btn grey darken-1"
                                data-image={this.props.image}
                                data-title={this.props.title}
                                data-link={this.props.link}
                                onClick={(e) => this.props.handleSave(e)}
                            >Save Data</button>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>




        );
    }
}

export default ItemCard;
