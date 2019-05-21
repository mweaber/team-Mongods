import React, { Component } from "react"
import API from "../../util/API";
import StatueDisplay from "../statueDisplay/StatueDisplay";

const containerStyle = {
    paddingLeft: "170px"
}

const containerBox = {
    backgroundColor: "white",
    border: "#4db6ac solid 1px"
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
        })
    }



    render() {
        return (
            <div>
                <div style={containerStyle}>
                    <div style={containerBox}>
                        <div className="col s12 m12 l12">
                            {
                                this.state.userStatues.map(statue => (
                                    <StatueDisplay
                                        key={statue.collectible_name}
                                        name={statue.collectible_name}
                                        productionCo={statue.production_co}
                                        notes={statue.notes}
                                        yourNum={statue.your_num}
                                        editionNum={statue.edition_num}
                                        id={statue.id}
                                        alt={statue.collectible_name}
                                        image1={statue.image_url1}
                                        image2={statue.image_url2}
                                        image3={statue.image_url3}
                                        image4={statue.image_url4}
                                        image5={statue.image_url5}
                                    />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;