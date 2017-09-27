
import React, { Component } from "react"
class App extends Component {
    constructor() {
        super();
        this.state = {
            array: [1, 2, 3, 4, 5, 6, 7]
        }
    }
    arr() {
        const numbers = this.state.array.slice();
        return numbers.map((number, index) =>
            <li key={index}>
                {number}
            </li>
        );
      
    }

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    {this.arr()}
                </ul>
            </div>
        );
    }
}
export default App;