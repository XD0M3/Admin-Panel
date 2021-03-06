import React, { Component } from 'react';
import Tournaments from './Tournaments';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.avatar = sessionStorage.getItem('avatar');
        this.rank = sessionStorage.getItem('rank');
        this.name = sessionStorage.getItem('login_name');
        this.c = props.classes;
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    logOut(cast) {
        sessionStorage.setItem('login', false);
        sessionStorage.setItem('login_name', "");
        sessionStorage.setItem('rank', "");
        sessionStorage.setItem('avatar', "");
        console.log("test");
        cast.setState({ loggedIn: false, key: Math.random() });
        //cast.setStage({ loggedIn: false});
    }

    render() {

        return (
            <div>
                <nav className="side-navbar">
                    <div className="side-navbar-wrapper">

                        <div className="sidenav-header d-flex align-items-center justify-content-center">

                            <div className="sidenav-header-inner text-center"><img src={this.avatar} alt="person" className="img-fluid rounded-circle" />
                                <h2 className="h5">{this.name}</h2><span>{this.rank}</span>
          </div>

                                <div className="sidenav-header-logo"><a href="" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div>
                            </div>

                            <div className="main-menu">
                                <h5 className="sidenav-heading">Main</h5>
                                <ul id="side-main-menu" className="side-menu list-unstyled">
                                    <li><a href=""> <i className="icon-home"></i>Home</a></li>
                                    <li><a href="#st1" data-toggle="collapse"><i className="fa fa-bar-chart"></i>Statistics</a>
                                        <ul id="st1" className="collapse list-unstyled ">
                                            <li><a href="#">Page</a></li>
                                            <li><a href="#">Page</a></li>
                                            <li><a href="#">Page</a></li>
                                        </ul>
                                    </li>

                                    <li><a href=""> <i className="fas fa-users"></i>Staff</a></li>
                                    <li><a href=""> <i className="fas fa-sticky-note"></i>Guides</a></li>
                                    <li><a href="#tools" aria-expanded="false" data-toggle="collapse"> <i className="fas fa-wrench"></i>Tools </a>
                                        <ul id="tools" className="collapse list-unstyled ">
                                            <li><a href="#">Page</a></li>
                                            <li><a href="#">Page</a></li>
                                            <li><a href="#">Page</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="page">

                        <header className="header">
                            <nav className="navbar">
                                <div className="container-fluid">
                                    <div className="navbar-holder d-flex align-items-center justify-content-between">
                                        <div className="navbar-header"></div>
                                        <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">

                                        <li className="nav-item"><a className="nav-link logout" onClick={() => this.logOut(this.c)}> <span className="d-none d-sm-inline-block">Logout</span><i className="fas fa-sign-out-alt"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    <div className="container-fluid">
                       <Tournaments />
                    </div>
                        <footer className="main-footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>XD0M3 &copy; 2018-?</p>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>

                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
            </div>
        );
    }
}



export default Panel;
