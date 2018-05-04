import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    componentWillUnmount() {
        
    }


    render() {

        return (
            <div className="container">
                {this.state.users.map(user => <h1>{user.id}</h1>)}
            </div>
        );
    }
}



export default Title;
