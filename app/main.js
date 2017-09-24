import React from "react";
import {render} from "react-dom";


import { Router, Route, hashHistory, Link } from 'react-router'

class R1 extends React.Component {
  render() {
      return (
          <div>
           我是第一个路由组件
           <Link to="/" >首页</Link>
           <Link to="/R2" >首页2</Link>
         
          </div>
      );
  }
}

class R2 extends React.Component {
  render() {
      return (
          <div>
           我是第2个路由组件
         
          </div>
      );
  }
}
class R3 extends React.Component {
  render() {
      return (
          <div>
           我是第3个路由组件
          
          </div>
      );
  }
}

render(
    <Router history={hashHistory} >
      <Route path="/" component={R1}>
        <Route path="R2 " component={R2}>
          <Route path="R3/:id" component={R3} />

        </Route>
      </Route>
    </Router>
,
  document.getElementById('app-container')
)
