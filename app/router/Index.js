
import React, { Component } from "react"

class Router extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div>
                111
              {this.props.children}
            </div>

        );
    }
}

class TV extends Component {
    render() {
        return (
            <div>
                <div>电视节目列表 </div>
                {this.props.children}
            </div>
        )
    }
}

class Show extends Component {
    render() {
        return (
            <h3>节目</h3>
        )
    }
}

/* ReactDOM.render((
    <Router>
        <Route path="/" component={Router}>
            <Route path="TV" component={TV}>
                <Route path="Shows/:id" component={Show}>

                </Route>
            </Route>
        </Route>
    </Router>
),) */
export default Router;