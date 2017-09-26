import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import FooterNav from './footer-nav';

class App extends Component{
    render(){
        return (
	    <div>
		<h2>React Router v4.0</h2>
		<Link to='/about'>About</Link>
		<FooterNav />
	    </div>
	);
    }
}

export default App;