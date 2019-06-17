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
                             {this.props.rm ? <img src={this.props.rm.image_url1} alt="sides of comics" /> : null }
        {this.props.rm ? <span className="card-title">{this.props.rm.collectible_name}</span> : <p>Oops! Looks like no one has used this app before!  You could be the first!</p> }
                         </div>


                    </div>



                </div>
            </div>
        )
    }
}

export default RecentlyAddedOrders;