

import React, { Component } from "react"
import Board from './Board.js'

import './less.less'
class ShoppingList extends Component {
    render() {
        return (
            <div className="shopping-list">
               
<Board/>
                <h1 className="Clear-Both">Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
export default ShoppingList
