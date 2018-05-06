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
        fetch("http://localhost:4000/users/", {
            method: "POST",
            body: JSON.stringify({name: name, passwort: passwort})
        }).then((response) => alert(JSON.stringify(response)));
    }

    render() {

        return ( 
            <Login login={this.login} />
        );
    }
}



export default Content;
