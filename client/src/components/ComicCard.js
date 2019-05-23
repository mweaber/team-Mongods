import React, { Component } from "react";
// import SideCover from "../images/sideCoversSmall.jpg";
import Spider from "../images/jean-philippe-delberghe-640668-unsplash.jpg"
import API from "../util/API"
import RecentlyAddedStatues from "./recentlyAdded/RecentlyAdded"
import RecentlyAddedOrders from "./recentlyAdded/ReccentlyAddedOrders"

class ComicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentStatues: [],
            recentItems: [],
            megaItems: []
        }
    }

    componentDidMount() {
        // this.checkUser();
        // this.getUserPosts();
        // API.ebayItemsRecent().then(e => {
        //     this.setState({
        //         recentItems: e.data[0]
        //     })
        //     console.log(this.state.recentItems)
        //     // this.setState({
        //     //     userEbayItems: e.data
        //     // })
        // }).catch(err => console.log(err))
        API.statuesRecent().then(e => {
            this.setState({
                recentStatues: e.data[0]
            })
            console.log(e.data[0].image_url1)
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
        console.log(this.state)
        // const po = this.state.megaItems;
        // console.log(po)
        // console.log(this.state.megaItems.image_url1)
        return (
            <div>
                {/* <h4 style={{ paddingLeft: "11.5px" }}>Recently added Statues</h4> */}
                <RecentlyAddedStatues rs={this.state.recentStatues} />
                <RecentlyAddedOrders rm={this.state.megaItems} />


            </div>






        );
    }
}

export default ComicCard;