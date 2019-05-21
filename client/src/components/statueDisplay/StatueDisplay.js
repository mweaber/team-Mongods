import React, { Component } from "react"


class StatueDisplay extends Component {

    render() {
        return (
            <div>
                <div className="col s12 m4 l4">
                    <h5>{this.props.name}</h5>
                    <img src={this.props.image1} alt={this.props.alt} style={{ height: "200px", width: "auto" }} key={this.props.id} />
                    <p>Edition Number: {this.props.yourNum} out of {this.props.editionNum}</p>
                    <p>Manufactured by: {this.props.productionCo}</p>
                    <p>Item Condition: {this.props.notes}</p>

                </div>
            </div>

        )
    }



}

export default StatueDisplay;