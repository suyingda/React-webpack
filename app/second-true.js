
import React, { Component } from "react"
class App extends Component {
    constructor() {
        super();
        this.state = {
            a: 100
        }
    }
    add() {
        this.setState({
            a: this.state.a+1
        })
    }

    render() {
        return (
            <div>
                <h1>state</h1>
                <p>{this.state.a}</p>
                <p onClick={(this.add).bind(this)}>123</p>
            </div>
        );
    }
}
export default App;