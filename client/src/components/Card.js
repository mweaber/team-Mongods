import React, { Component } from "react";
import API from "../util/API";


// const cardHeight = {
//     // maxHeight: "672px",
//     minHeight: "672px"
// }

// const imageHeight ={
//     // maxheight: "555px",
//     minHeight: "555px",
//     // width: "auto",
//     overflow: "hidden",
//     alignSelf: "center"
// }
class Card extends Component {

    handleOnClick = e => {
        e.preventDefault();
        const dat = e.target.dataset;
        // console.log(dat)
        const newPO = {
            collectible_name: dat.name,
            releaseDate: dat.releasedate,
            image_url1: dat.image,
            producer: dat.producer,
        } 
        console.log(newPO)
        API.saveNewPO(newPO)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))

        
        // window.location = (this.props.link)
        window.open(
            this.props.link,
            "_blank"
        )
    }

    render() {
        return (
            <div>
                    <div className="col s6">
                        <div className="card">
                            <div className="card-image">
                                <img alt={this.props.name} src={this.props.image} key={this.props.id} href={this.props.link}/>
                                <span className="card-title">{this.props.alt}</span>
                            </div>
                            {this.props.releaseDate ? <div className="card-content">
                                {/* <p>{this.props.alt}</p> */}
                                {this.props.releaseDate ? <p>Release Date: {this.props.releaseDate}</p> : null}
                                {this.props.producer ? <p>Producer: {this.props.producer} </p> : null }
                            </div> : null}
                            
                            <center><a href={this.props.link} 
                                data-releasedate={this.props.releaseDate} 
                                data-producer={this.props.producer}
                                data-name={this.props.alt}
                                data-image={this.props.image}
                                target="_blank" className="Waves-effect waves-light btn grey darken-1" style={{marginBottom: "5px"}} onClick={(e) => this.handleOnClick(e)}>Preorder</a></center>
                        </div>
                    </div>
              
            </div>


        );
    }
}

export default Card;
