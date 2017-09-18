
import React, { Component } from "react"
import In from './Index.js'
import {Router,Route,link} from 'react-router'
class S extends Component {

    render() {
        return (
            <div>
                <In></In>
                <Router>
                    <Route path="/" component={Router}>
                        <Route path="TV" component={TV}>
                            <Route path="Shows/:id" component={Show}>

                            </Route>
                        </Route>
                    </Route>
                </Router>
            </div>
        );
    }
}
export default S;