
import React, { Component } from "react"
import Sun from './Sun.js'
import { PropTypes } from "prop-types";
class Father extends Component {
    constructor(a,bbbb) {
        super();
        console.log(bbbb)
        console.log('我是父组件获取到数据打印')
      
    }
    render() {
        return (
            <div>
                i am Father
              <br />
                <Sun  ></Sun>
            </div>
        );
    }
}
Father.contextTypes = {
    a: PropTypes.number
}
export default Father;