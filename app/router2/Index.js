
import React, { Component } from "react"
import { Router, Route, Link } from 'react-router'

import R1 from './R1.js'
import R2 from './R2.js'
import R3 from './R3.js'
class Router2 extends Component {
    constructor() {
        super();
        this.a = 100;
    }
   
    render() {
        return (
            <div>
            <R1></R1>
            <R2></R2>
            <R3></R3>
            </div>
        );
    }
}
export default Router2;