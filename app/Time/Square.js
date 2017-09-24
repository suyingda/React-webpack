

import React, { Component } from "react"
class Square extends Component {
    setS() {
        this.setState({
            value: 'x'
        })
    }
    render() {
  /*       return (
            <button className="square" onClick={(this.setS).bind(this)}>
                {this.state.value}
            </button>
        ); */
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
export default Square
