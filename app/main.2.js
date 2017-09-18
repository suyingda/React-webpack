import React from "react";
import { render } from "react-dom";
import App from "./redux/Index.js";

import {Router,Route,link} from 'react-router'


render(
    <App></App>,
    document.getElementById('app-container')
)
