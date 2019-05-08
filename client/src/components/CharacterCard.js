import React, { Component } from "react";

class CharacterCard extends Component {

    render() {
        return (
            <div>
         
                    <div className="col s2">
                        <div className="card" >
                            <div className="card-image">
                                <img alt={this.props.name} src={this.props.image} />
                                <span className="card-title">{this.props.real_name}</span>
                            </div>
                            <div className="card-content">
                                <p>{this.props.alt}</p>
                            </div>
                            <div className="card-action">
                                {/* <a href="#">{this.props.link}</a> */}
                            </div>
                        </div>
                    </div>
             
            </div>

                


        );
    }
}

export default CharacterCard;
