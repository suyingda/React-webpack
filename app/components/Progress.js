
import React, { Component } from "react"
class Progress extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <h1>我是进度条</h1>
                {this.props.progress}
            </div>
        );
    }
}
export default Progress;