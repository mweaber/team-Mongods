import React, { Component } from "react";
// import SideCover from "../images/sideCoversSmall.jpg";
import Spider from "../images/jean-philippe-delberghe-640668-unsplash.jpg"
import API from "../util/API"

class ComicCard extends Component {
state= {
    recentStatues: [],
    recentItems: []
}

    componentDidMount() {
        // this.checkUser();
        // this.getUserPosts();
        API.ebayItemsRecent().then(e => {
            this.setState({
                recentStatues: e.data[0]
            })
            console.log(e.data[0])
            // this.setState({
            //     userEbayItems: e.data
            // })
        }).catch(err => console.log(err))
        API.statuesRecent().then(e => {
            this.setState({
                recentItems: e.data[0]
            })
            console.log(e.data[0])
        }).catch(err => console.log(err))
    }

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