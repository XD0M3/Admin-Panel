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

    user = {};

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
                let x = {rank: r.rank, avatar: r.avatar}
                if (suc) {
                    console.log(r);
                    sessionStorage.setItem('login', true);
                    sessionStorage.setItem('login_name', namex);
                    sessionStorage.setItem('rank', r.rank);
                    sessionStorage.setItem('avatar', r.avatar);
                    classes.setState({ loggedIn: true, key: Math.random() });
                    classes.user = x;
                } else {
                    classes.wrong = {
                        error: true,
                        message: "Something Went Wrong!"
                    };
                    classes.setState({ loggedIn: false, key: Math.random() });
                }
            });
        
    }

    render() {
        console.log(sessionStorage.getItem('login') + " = false | " + this.state.loggedIn + " = false");
        if (sessionStorage.getItem('login') == true || this.state.loggedIn == true) {
            console.log("Panel rendered!");
            return (
                <Panel user={this.user} classes={this} />
            );
        } else {
            console.log("Login rendered!");
            return (
                <Login login={this.login} classes={this} wrong={this.wrong} />
            );
        }
    }
}



export default Content;
