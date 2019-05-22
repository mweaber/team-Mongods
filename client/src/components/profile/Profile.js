import React, { Component } from "react"
import API from "../../util/API";
import StatueDisplay from "../statueDisplay/StatueDisplay";

const containerStyle = {
    // paddingLeft: "170px",
    backgroundColor: "white",
    border: "#4db6ac solid 1px",
    marginTop: "15px"
}


class Profile extends Component {

    state = {
        userStatues: []
    };

    checkUser() {
        API.checkUser()
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    };

    componentDidMount() {
        this.checkUser();
        // this.getUserPosts();
        API.findMyStatues().then(e => {
            // console.log(e)
            this.setState({
                userStatues: e.data
            })
            console.log(this.state.userStatues)
        });
        API.findMyEbayItems().then(e => {
            console.log(e)
            this.setState({
                userEbayItems: e.data
            })
            console.log(this.state.userEbayItems)
        })
    }



    render() {
        return (
            <div>
                <div className="container">
                    <h4>Your Saved Statues</h4>
                </div>

                <div className="container" style={containerStyle}>
                    <div className="row">
                        {/* <div className="col s12 m4 l4"> */}

                        {
                            this.state.userStatues.map(statue => (
                                <StatueDisplay
                                    key={statue.collectible_name}
                                    name={statue.collectible_name}
                                    productionCo={statue.production_co}
                                    notes={statue.notes}
                                    yourNum={statue.your_num}
                                    editionNum={statue.edition_num}
                                    id={statue._id}
                                    alt={statue.collectible_name}
                                    image1={statue.image_url1}
                                    image2={statue.image_url2}
                                    image3={statue.image_url3}
                                    image4={statue.image_url4}
                                    image5={statue.image_url5}
                                    userID={statue.userID}
                                />
                            ))
                        }
                        {/* </div> */}
                    </div>
                </div>

                <div className="container">
                    <h4>Your Saved Ebay Searches</h4>
                </div>
                <div className="container" style={containerStyle}>
                    <div className="row">





                    </div>


                </div>
            </div >
        )
    }
}

export default Profile;