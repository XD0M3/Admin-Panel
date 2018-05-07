import React, { Component } from 'react';


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    tick() {


    }

    render() {

        return (
            <div>
                <nav className="side-navbar">
                    <div className="side-navbar-wrapper">

                        <div className="sidenav-header d-flex align-items-center justify-content-center">

                            <div className="sidenav-header-inner text-center"><img src="https://i.imgur.com/XcvGZVc.png" alt="person" className="img-fluid rounded-circle" />
                                <h2 className="h5">XD0M3</h2><span>Editional Staff Head</span>
          </div>

                                <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div>
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
                                        <div className="navbar-header"><a id="toggle-btn" href="#" className="menu-btn"><i className="icon-bars"> </i></a><a href="index.html" className="navbar-brand">
                                        </a></div>
                                        <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">

                                            <li className="nav-item"><a href="login.html" className="nav-link logout"> <span className="d-none d-sm-inline-block">Logout</span><i className="fas fa-sign-out-alt"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>

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
