import React, { Component } from "react"

const sectionStyle= {
    marginTop: "10px",
    minHeight: "500px",
    maxHeight: "500px",
}

class StatueDisplay extends Component {
   
    render() {
        console.log(this.props.id)
        return (
            <div>
                <div className="col m4 l4" style={sectionStyle}>
                    <h5 className="center flow-text">{this.props.name}</h5>
                    <center><img  src={this.props.image1} alt={this.props.name} style={{ height: "300px", width: "auto" }} key={this.props.id} /></center>
                    <p className="center" style={{margin: "3px 0px 3px 0px"}}>Edition Number: {this.props.yourNum} out of {this.props.editionNum}</p>
                    <p className="center"  style={{margin: "3px 0px 3px 0px"}}>Manufactured by: {this.props.productionCo}</p>
                    <p className="center"  style={{margin: "3px 0px 3px 0px"}}>Item Condition: {this.props.notes}</p>
                </div>
            </div>

        )
    }
}

export default StatueDisplay;