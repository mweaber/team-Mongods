import React, { Component } from "react"
import API from "../../util/API";

class StatueInput extends Component {
    constructor(props){
        super(props)
        this.state={
            collectibleName: null,
            productionCompany: null,
            imageUrl: null,
            yourNum: null,
            editionNum: null,
            yourNotes: null
        }
    }

    componentDidMount() {
        // API.findItemsByKeywords().then(test => {
        //     console.log(test);
        // })
    };
    handleFormSubmit = (e) => {
        e.preventDefault()
        const newStatues = {
            collectible_name: this.state.collectibleName,
            production_co: this.state.productionCompany,
            your_num: this.state.yourNum,
            edition_num: this.state.editionNum,
            edition: this.state.edition,
            notes:  this.state.yourNotes,
            image_url1: this.state.imageURL,
            image_url2: this.state.imageURL2,
            image_url3: this.state.imageURL3,
            image_url4: this.state.imageURL4,
            image_url5: this.state.imageURL5,

        }
        API.saveNewStatue(newStatues)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))
        console.log(newStatues)
    }

    handleInputChange = (e) => {
        e.preventDefault()
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        const sectionStyle= {
            padding: "100px",
            color: "white"
        }
        return (
            <div>
                <div className="container" style={{sectionStyle}}>
                    <div className="row">
                        <div className="col s12 white" style={{padding: "20px", margin: "10px", border: "#4db6ac solid 1px"}}>

                            <form onSubmit={(e) => this.handleFormSubmit(e)} >
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" onChange={(e)=>this.handleInputChange(e)} placeholder="Collectible name" required name="collectibleName" />
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="production_company" onChange={(e)=>this.handleInputChange(e)} placeholder="Production company" required name="productionCompany" />
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="image_url" placeholder="Image URL" required name="imageURL" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="your_num" placeholder="Your Edition Number" required name="yourNum" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="edition_num" placeholder="Edition Size" required name="editionNum" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="edition" placeholder="Edition" required name="edition" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m12 l12">
                                    <textarea rows="5" type="text" className="ghost-input" style={{marginTop: "10px", marginBottom: "10px"}} placeholder="Add any notes related to damage or customization here" required name="yourNotes" onChange={(e)=>this.handleInputChange(e)}></textarea>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="image_url2" placeholder="Additional Image URL (optional)" required name="imageURL2" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="image_url3" placeholder="Additional Image URL (optional)" required name="imageURL3" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="image_url4" placeholder="Additional Image URL (optional)" required name="imageURL4" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="image_url5" placeholder="Additional Image URL (optional)" required name="imageURL5" onChange={(e)=>this.handleInputChange(e)}/>
                                </div>
                                <div className="col s12 m12 l12">
                                    <input type="submit" style={{marginTop: "10px"}} className="ghost-button btn-small grey dark-1" onClick={(e) => this.handleFormSubmit(e)} />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default StatueInput;