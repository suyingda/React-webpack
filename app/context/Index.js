
import React, { Component } from "react"
import Father from './Father.js'
import { PropTypes } from "prop-types";
class App extends Component {
    constructor() {
        super();
        this.state = {
            a: 100
        }
    }
    render() {
        return (
            <div>
                i am context
               <br />
                <Father></Father>
            </div>
        );
    }
    // 直接跨组件传递

    getChildContext() {
        return {
            a: this.state.a
        }
    }
}

App.childContextTypes = {
  /*   a: PropTypes.string.isRequired */
    a: PropTypes.number
}

export default App;