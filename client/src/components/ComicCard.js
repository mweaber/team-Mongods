import React, { Component } from "react";
// import SideCover from "../images/sideCoversSmall.jpg";
import Spider from "../images/jean-philippe-delberghe-640668-unsplash.jpg"
import API from "../util/API"

class ComicCard extends Component {
    state = {
        recentStatues: [],
        recentItems: []
    }

    componentDidMount() {
        // this.checkUser();
        // this.getUserPosts();
        API.ebayItemsRecent().then(e => {
            this.setState({
                recentItems: e.data[0]
            })
            console.log(this.state.recentItems)
            // this.setState({
            //     userEbayItems: e.data
            // })
        }).catch(err => console.log(err))
        API.statuesRecent().then(e => {
            this.setState({
                recentStatues: e.data[0]
            })
            console.log(e.data[0])
        }).catch(err => console.log(err))
        API.preordersRecent().then(e => {
            this.setState({
                megaItems: e.data[0]
            })
            console.log(this.state.megaItems.collectible_name)
            console.log(this.state.megaItems.image_url1)
            
        }).catch(err => console.log(err))
    }

    render() {
        const rs = this.state.recentStatues;
        // console.log(this.state)
        // const po = this.state.megaItems;
        // console.log(po)
        // console.log(this.state.megaItems.image_url1)
        return (
            <div>
                <h4 style={{ paddingLeft: "11.5px" }}>Recently added Statues</h4>
                <div className="col s12 m12 l12">



                    <div className="card">
                        <div className="card-image">
                            <img src={rs.image_url1} alt="sides of comics" />
                            <span className="card-title">{rs.collectible_name}</span>
                    
                        </div>


                    </div>
                </div>
                {/* <div className="col s12 m16 l6">
                    <div className="card">
                        <div className="card-image">
                            <img src={rs.image_url1} alt="sides of comics" />
                            

                        </div>

                    </div>
                </div> */}

            </div>






        );
    }
}

export default ComicCard;