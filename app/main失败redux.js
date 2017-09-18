import React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers/Index.js'
import App from './redux/components/App'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App></App>
    </Provider>,

    
    document.getElementById('app-container')
)
