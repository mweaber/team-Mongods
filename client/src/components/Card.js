import React, { Component } from "react";


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
        console.log("eat cacks")
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
                            <center><a className="Waves-effect waves-light btn grey darken-1" style={{marginBottom: "5px"}}onClick={this.handleOnClick}>Eat Cacks</a></center>
                        </div>
                    </div>
              
            </div>


        );
    }
}

export default Card;
