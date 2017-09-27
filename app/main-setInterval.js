import React from "react";
import { render } from "react-dom";
import App from './guanwang1/Index.js'

function click(){
const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);

render(
    element,
    document.getElementById('app-container')
)
}

setInterval(click,1000)