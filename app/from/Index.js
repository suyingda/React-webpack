
import React, { Component } from "react"
class App extends Component {
    constructor() {
        super();
        this.state = {
            "value": '100'
        }
    }
    /*  getInitialState() {
         return { 
             value: 'Hello Runoob!'
          };
     } */
     
    handleChange(event) {
        this.setState({
            "value": event.target.value
        });
    }
    render() {
    
        return (
            <div>
                 <input type="text" value={this.state.value} onChange={(this.handleChange).bind(this)} /> 
                <h4>{this.state.value}</h4>
            </div>
        );
    }
}
export default App;