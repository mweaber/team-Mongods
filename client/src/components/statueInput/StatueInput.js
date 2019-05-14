import React, { Component } from "react"

class StatueInput extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12">

                            <form action="" >
                                <div className="col s12 m4 l4">

                                    <input type="text" className="ghost-input" id="collectible_name" placeholder="Collectible name" required />
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="production_company" placeholder="Production company" required />
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="image_url" placeholder="Image URL" required />
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="your_num" placeholder="Your Edition Number" required />
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="text" className="ghost-input" id="edition_num" placeholder="Edition Size" required />
                                </div>
                                <div className="col s12 m12 l12">
                                    <textarea rows="5" type="text" className="ghost-input" placeholder="Add any notes related to damage or customization here" required ></textarea>
                                </div>
                                <div className="col s12 m4 l4">
                                    <input type="submit" className="ghost-button btn-small grey dark-1" />
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