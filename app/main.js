import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import App from './modules/App.js';


import Home from './modules/home.js';
import Order from './modules/order';
import Cart from './modules/cart';
import My from './modules/my';

const About = () => (
    <h3>About Page</h3>
)

const NoMatch = () => (
    <p>No Match</p>
)

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/home' component={Home} />
            <Route path='/order' component={Order} />
            <Route path='/cart' component={Cart} />
            <Route path='my' component={My} />
        </div>
    </Router>,
    document.getElementById('app-container')
);