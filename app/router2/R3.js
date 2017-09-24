
import React, { Component } from "react"

class R3 extends Component {
   constructor() {
       super();
     
   }
  
   render() {
       return (
           <div>
            我是第san个路由组件
            {this.props.children}
           </div>
       );
   }
}
export default  R3;