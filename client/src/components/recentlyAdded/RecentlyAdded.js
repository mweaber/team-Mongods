import React, { Component } from "react";

class RecentlyAddedStatues extends Component {

    render() {
        return (
            <div>

                <div className="col s12 m6 l6">
                    <h5> Recently Added Statues </h5>


                    <div className="card">
                        <div className="card-image">
                            {this.props.rs ? <img src={this.props.rs.image_url1} alt="sides of comics" /> : null }
        {this.props.rs ? <span className="card-title">{this.props.rs.collectible_name}</span> : <p>Oops! It looks like no one has used this app before!  You could be the first!</p> }

                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default RecentlyAddedStatues;