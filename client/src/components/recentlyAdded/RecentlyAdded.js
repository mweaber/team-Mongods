import React, { Component } from "react";

class RecentlyAddedStatues extends Component {

    render() {
        return (
            <div>

                <div className="col s12 m6 l6">
                    <h5> Recently Added Statues </h5>


                    <div className="card">
                        <div className="card-image">
                            {this.props.rs.image_url1 ? <img src={this.props.rs.image_url1} alt="sides of comics" /> : null }
        {this.props.rs.collectible_name ? <span className="card-title">{this.props.rs.collectible_name}</span> : <p>Oops! It looks like no one has used this app before!  You could be the first!</p> }

                        </div>


                    </div>
                    
                    {/* <div className="card">
                        <div className="card-image">
                            <img src={this.props.rm.image_url1} alt="sides of comics" />
                            <span className="card-title">{this.props.rm.collectible_name}</span>

                        </div>


                    </div> */}



                </div>
            </div>
        )
    }
}

export default RecentlyAddedStatues;