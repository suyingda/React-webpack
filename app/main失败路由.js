import React from "react";
import ReactDOM from "react-dom";


import { Router, Route, Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">首页</Link>
                    <Link to="/TV">电视</Link>
                </div>
               {/*  {this.props.children} */}
            </div>

        );
    }
}

class TV extends React.Component {
    render() {
        return (
            <div>
                <div>电视节目列表 </div>
              {/*   {this.props.children} */}
            </div>
        )
    }
}

class Show extends React.Component {
    render() {
        return (
            <h3>节目</h3>
        )
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="TV" component={TV}>
                <Route path="shows/:id" component={Show} />
            </Route>
        </Route>
    </Router>
),
    document.getElementById('app-container')
);

