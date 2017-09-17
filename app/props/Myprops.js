
import React, { Component } from "react";
import { PropTypes } from "prop-types";
class Myprops extends Component {

    constructor(abc) {
        super();
        console.log(abc)  //系统自动传入props
        this.state = {
            a: abc.a,
        }
    }
    render() {
        return (
            <div>
                {this.props.b}
                <br />
                {this.state.a}
                <br />

                <br />
                <p onClick={() => { { this.props.setD(10) } }}>点击改变父组件值</p>
            </div>
        );
    }
}
Myprops.PropTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    /*  c:PropTypes.number.isRequired, */

}
export default Myprops;