import React, { Component } from 'react';

import Login from './Login';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false};
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {
        
    }

    login(/*Nutzername*/name,/*Passwort*/passwort) {
        alert("Nutzername: " + name + " | Passwort: " + passwort);
    }

    render() {

        return ( 
            <Login login={this.login} />
        );
    }
}



export default Content;
