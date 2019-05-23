import React, { Component } from "react";

class RecentlyAddedOrders extends Component {

    render() {  
        console.log(this.props.rm)
        return (
            <div>

                <div className="col s12 m6 l6">
                <h5> Recently Preordered Items</h5>
                     <div className="card">
                         <div className="card-image">
                             <img src={this.props.rm.image_url1} alt="sides of comics" />
                             <span className="card-title">{this.props.rm.collectible_name}</span>
                         </div>


                    </div>



                </div>
            </div>
        )
    }
}

export default RecentlyAddedOrders;