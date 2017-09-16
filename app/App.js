
import React, { Component } from "react"
class App extends Component {
    haha(li) {
        if (li == "1") {
            return (
                <ul>
                    <li>苏达</li>

                </ul>
            )
        } else {
            return (
                <ul>
                    <li>苏颖达</li>
                </ul>
            )
        }

    }
    render() {
        let json = {
            "width": "100px",
            "color": "red"
        }
        let arr = [1, 2, 3, 4, 5].map((item,index) => {
            return (
                <div>
                    <li key={index}> {item}</li>
                </div>

            )
        })
        return (
            <div>
                <h1>suyingda{9999 + 1}岁</h1>
                <h1>调用函数</h1>
                {this.haha(1)}
                <h1>用JSX写样式</h1>
                <div style={json}>
                    样式控制
                </div>
                <h1>直接打印</h1>
                <div>{arr}</div>
            </div>
        );
    }
}
export default App;