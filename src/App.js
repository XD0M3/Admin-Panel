import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Content from './Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { stage: "loading" };
    }


    render() {
        if (this.state.stage === "loading") {
            this.loading = setTimeout(() => this.setState({ stage: "index" }), 4000);
            return (
                <Title />
            );
        } else {
            return (
                <Content />
            );
        }
    }
}



export default App;
