
import React, { Component } from "react"
 
class R1 extends Component {
    render() {
        return (
            <div>
             我是第一个路由组件
             {this.props.children}
            </div>
        );
    }
}
export default  R1;