
import React, { Component } from "react"
import Header from "./Header.js";
import Progress from "./Progress.js";
class App extends Component {
    constructor() {
        super();

        this.state={
            progress: '-'
        }

    }
 /*    getInitialState() {
        return {
           
        }
    } */
    compontDidMount() {
        $('#player').jPlayer({
            ready: function () {
                $('#player').jPlayer('setMedia', {
                    ma3: 'www.baidu.com'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            this.setState({
                progress: Math.round(e.jPlayer.status.currentTime)
            })
        })
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div id="player"></div>
                <Progress progress={this.state.progress}></Progress>
            </div>
        );
    }
}
export default App;