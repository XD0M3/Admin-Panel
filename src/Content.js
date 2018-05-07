import React, { Component } from 'react';

import Login from './Login';
import Panel from './Panel';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false};
    }

    wrong = {
        error: false,
        message: ""
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {
        
    }

    login(/*Nutzername*/namex,/*Passwort*/passwortx, /*Class*/ classes) {
        let data = new FormData();
        data.append('json', JSON.stringify({ "name": namex, "passwort": passwortx }));
        fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({ "name": namex, "passwort": passwortx })
        }).then((response) => response.json())
            .then(function (r) {
                let suc = r.loginSuccesfull;
                if (suc) {
                    sessionStorage.setItem('login', suc);
                    sessionStorage.setItem('login_name', namex);
                    classes.setState({ loggedIn: true });
                } else {
                    classes.wrong = {
                        error: true,
                        message: "Something Went Wrong!"
                    };
                    classes.setState({ loggedIn: false });
                }
            });
        
    }

    render() {
        if (sessionStorage.getItem('login') || this.state.loggedIn) {
            return (
                <Panel />
            );
        } else {
            return (
                <Login login={this.login} classes={this} wrong={this.wrong} />
            );
        }
    }
}



export default Content;
