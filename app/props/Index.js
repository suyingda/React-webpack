
import React, { Component } from "react"
import Props from "./Myprops.js"
class App extends Component {

    constructor() {
        super();
        this.state = {
            d: 6
        }
    }
    setD(number) {
        this.setState({
            "d": number
        })
    }
    render() {
        return (
            <div>
                <h1>我是APP组件:D状态为：{this.state.d}</h1>
                <Props a="1" setD={(this.setD).bind(this)} b="9999999999"></Props>

            </div>
        );
    }
}
export default App;