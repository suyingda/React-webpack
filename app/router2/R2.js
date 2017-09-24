
import React, { Component } from "react"

class R2 extends Component {
   constructor() {
       super();
     
   }
  
   render() {
       return (
           <div>
            我是第er  个路由组件
            {this.props.children}
           </div>
       );
   }
}
export default  R2;