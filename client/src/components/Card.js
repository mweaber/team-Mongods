import React, { Component } from "react";

// general card , could add slider
// build out with props & Json to be replaced later by scraped info

class Card extends Component {
   

    render() {
        return (
            <div>
         
                    <div className="col s6">
                        <div className="card" >
                            <div className="card-image">
                                <img alt={this.props.name} src={this.props.image} key={this.props.id} />
                                <span className="card-title">{this.props.alt}</span>
                                {/* <a className="btn-floating halfway-fab waves-effect waves-light grey"><i className="material-icons">add</i></a> */}
                            </div>
                            <div className="card-content">
                                <p>{this.props.alt}</p>
                            </div>
                        </div>
                    </div>
              
            </div>


        );
    }
}

export default Card;
