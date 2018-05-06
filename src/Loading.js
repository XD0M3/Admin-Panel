import React, { Component } from 'react';
import load from './loading.gif';
class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        

    }

    render() {
        
        return (
            <div className="box">
                <img className="loading" src={load} alt={"logo"} />
            </div>
        );
    }
}



export default Loading;
