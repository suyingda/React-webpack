import React from "react";
import { render } from "react-dom";
import { HashRouter,BrowserRouter, Route } from 'react-router-dom'

 
import App from './router4/Index.js'
render(
    <HashRouter>
        <App />
    </HashRouter>
    ,
    document.getElementById('app-container')
)
