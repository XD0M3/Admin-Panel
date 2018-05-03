import React, { Component } from 'react';

class Title extends Component {
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
                <div className="top"></div>
                <div className="right"></div>
                <div className="bottom"></div>
                <div className="left"></div>
            </div>
        );
    }
}



export default Title;
