
import React, { Component } from "react"
import "./css.less"
class Bar extends Component {
    constructor(props) {
        super();
        this.state = {
            v: props.v
        }
        console.log(props)
        this.setColor = props.setColor;
        this.change = (this.change).bind(this)
      
    }

    change(event) {
        this.setState({
            "v": event.target.value
        })
        this.setColor(this.props.color, this.state.v)
    }
    render() {
        return (
            <div className="Bar-kaola">
           {this.props.color}
              <div className="bar">
                    <input type="range" value={this.state.v} onChange={this.change} />
                    <input type="number" value={this.state.v} onChange={this.change} />
                </div>
            </div>
        );
    }
}
export default Bar;