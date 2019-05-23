import React, { Component } from "react";

class RecentlyAddedStatues extends Component {

    render() {
        return (
            <div>

                <div className="col s12 m6 l6">
                    <h5> Recently Added Statues </h5>


                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.rs.image_url1} alt="sides of comics" />
                            <span className="card-title">{this.props.rs.collectible_name}</span>

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