import React, { Component } from "react";
import "../style/itemCard.css"
// import API from "../util/API";
// import SideNav from "./sidenav/SideNav";


// general card , could add slider
// build out with props & Json to be replaced later by scraped info

class ItemCard extends Component {




    render() {
        return (
            <div className = "gridArea">
                <div className= "new_card_box" >
                    <div className = "new_card_image">
                        <img className = "new_image" alt = {this.props.name} src = { this.props.image } />
                    </div>
                    <div className = "new_card_title">
                        <span>Title: { this.props.title }</span>
                    </div>
                    <div className = "new_card_content">
                        <p>{ this.props.alt }</p>
                        <p>Location: {this.props.location}</p>
                    </div>
                    <div className = "new_card_action">
                        <h6>Click the following link to check out this item:</h6>
                        <a href={ this.props.link }>{ this.props.link }</a><br></br>
                    </div>
                    <div className="buttonSave">
                        <button
                            className = "Waves-effect waves-light btn grey darken-1 saveButton"
                            data-image = {this.props.image}
                            data-title = {this.props.title}
                            data-link = {this.props.link}
                            onClick = { (e) => this.props.handleSave(e) }
                            >Save This Item
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;
