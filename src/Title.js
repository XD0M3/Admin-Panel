import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = { show: "Hallo!", count: 0 , level: 0};
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
        this.setState({level: this.state.level + 1})
        let show = this.state.level;
        if (show === 1) {
            this.setState({ show: "Halloooooooo!" });
            
        } else if (show == 2) {
            this.setState({ show: "Die Seite wird vorbereitet" });
        } else if (show == 3) {
            this.setState({ show: "Gleich ist sie fertig." });
        } else if (show == 4) {
            this.setState({ show: "Gleich, Gleich, Gleich" });
        } else if (show == 5) {
            this.setState({ show: "Okay, und nun viel Spaﬂ auf der Website" });
            clearInterval(this.timerID);
        }
        

    }

    render() {
        
        return (
            <div className="mittig">
                <h2>{this.state.show}</h2>
            </div>
        );
    }
}



export default Title;
