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

    login(/*Nutzername*/namex,/*Passwort*/passwortx) {
        let data = new FormData();
        data.append('json', JSON.stringify({ "name": namex, "passwort": passwortx }));
        fetch("http://localhost:4000/login", {
            method: "post",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            mode: "no-cors",
            body: data
        }).then((response) => alert());
        /*var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

        }
        xhttp.open("POST", "http://localhost:4000/login");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.send(JSON.stringify({ name: namex, passwort: passwortx}));*/
    }

    render() {

        return ( 
            <Login login={this.login} />
        );
    }
}



export default Content;
