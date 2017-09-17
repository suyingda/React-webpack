
import React, { Component } from "react"
import { PropTypes } from "prop-types";
class Sun extends Component {
constructor(a,b){
    super();
    console.log(a,b)
}
   render() {
       return (
           <div>
              i  am  孙子
           </div>
       );
   }
}
Sun.contextTypes = {
    a: PropTypes.number
}
export default Sun;