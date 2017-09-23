

import React, { Component } from "react"
import Square from './Square.js'
import './less.less'
class Board extends Component {
    constructor() {
        super();
        this.state = {
            square: Array(9).fill(null)
        }
    }
  /*   handleClick(a) {
        this.setState({
            square: 'x'
        })
        console.log(a)
    } */
    handleClick(i) {
        const square = this.state.square.slice();
        square[i] = 'X';
        this.setState({square: square});
      }
    renderSquare(i) {
        return (
            <Square
                value={this.state.square[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    render() {
        return (
            <div className="shopping-list">
                <div className="Square">
                    <ul>
                        <li> {this.renderSquare(1)}</li>
                        <li> {this.renderSquare(2)}</li>
                        <li>  {this.renderSquare(3)}</li>
                        <li>  {this.renderSquare(4)}</li>
                        <li>  {this.renderSquare(5)}</li>
                        <li>  {this.renderSquare(6)}</li>
                        <li>  {this.renderSquare(7)}</li>
                        <li>  {this.renderSquare(8)}</li>
                        <li>  {this.renderSquare(9)} </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Board
