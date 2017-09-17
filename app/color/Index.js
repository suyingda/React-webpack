
import React, { Component } from "react"
import Bar from './Bar/Bar.js'
import "./Bar/css.less"
class App extends Component {
    constructor() {
        super();
        this.state = {
            r: 10,
            g: 20,
            b: 30
        }
        /* this.setColor=(this.setColor).bind(this) */
        /*   this.getColor = () => {
              console.log("没")
              return {
                  "backgroundColor": `rgb(${this.state.r},${this.state.g},${this.state.b}`
              }
          } */
    }
    // 设置函数
    setColor(color, value) {
        console.log(color, value)
        this.setState({ [color]: value })
    }
    render() {
        return (
            <div>
                {/*  <div style={{"backgroundColor" : `rgb(${this.state.r},${this.state.g},${this.state.b}`}} className="big"></div> */}
                <div style={{ "backgroundColor": `rgb(${this.state.r},${this.state.g},${this.state.b}` }} className="big"></div>
                <Bar color="r" v={this.state.r} setColor={(this.setColor).bind(this)}></Bar>
                <Bar color="g" v={this.state.g} setColor={(this.setColor).bind(this)}></Bar>
                <Bar color="b" v={this.state.b} setColor={(this.setColor).bind(this)}></Bar>
            </div>
        );
    }
}
export default App;