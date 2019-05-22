import React, { Component } from "react";
// import SideCover from "../images/sideCoversSmall.jpg";
import Spider from "../images/jean-philippe-delberghe-640668-unsplash.jpg"

class ComicCard extends Component {
    render() {
        return (
            <div>
               
                    <div className="card">
                        <div className="card-image">
                            <img src={Spider} alt="sides of comics"/>
                            <span className="card-title">Statues and Collectibles</span>
                            {/* <a href="#" className="btn-floating halfway-fab waves-effect waves-light grey"><i className="material-icons">add</i></a> */}
                        </div>
                        {/* <div className="card-content">
                            <p></p>
                        </div> */}
                    </div>
              


            </div>


        );
    }
}

export default ComicCard;