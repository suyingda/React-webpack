
import React, { Component } from "react"
class App extends Component {
    constructor() {
        super();
        this.a = 100;
    }
    add(){
        console.log(1)
        this.a++
    }
    render() {
        return (
            <div>
               {this.a}
               <div onClick={(this.add).bind(this)}>点击我</div>
            </div>
        );
    }
}
export default App;