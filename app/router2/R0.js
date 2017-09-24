
import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory,Link } from 'react-router'
 
 
import R1 from './R1.js'
import R2 from './R2.js'
import R3 from './R3.js'
React.render((
    <Router>
        <Route path="/" component={R1}>
            <Route path="TV" component={R2}>
                <Route path="Shows/:id" component={R3}>

                </Route>
            </Route>
        </Route>
    </Router>
))