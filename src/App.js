import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
import Content from './Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { stage: "loading" };
    }


    render() {
        if (this.state.stage === "loading") {
            this.loading = setTimeout(() => this.setState({ stage: "index" }), 7001);
            return (
                <Loading />
            );
        } else {
            return (
                <Content />
            );
        }
    }
}



export default App;
