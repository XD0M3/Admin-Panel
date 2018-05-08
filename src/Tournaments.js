import React, { Component } from 'react';


class Tournaments extends Component {
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
            <div className="row up">
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="gre">Upcomming Tournaments</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>CupNr</th>
                                            <th>Cupname</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">192</th>
                                            <td>Championsclub</td>
                                            <td>23.12.1998</td>
                                            <td>13:55 CET</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="gre">Past Tournaments</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Cup</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Results submitted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Champions Club</th>
                                            <td>23.12.1998</td>
                                            <td>19:00 CET</td>
                                            <td>Yes</td>
                                        </tr>
                                            <tr>
                                                <th scope="row">Go4 LoL</th>
                                                <td>23.12.1998</td>
                                                <td>15:00 CET</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Birthday Party</th>
                                                <td>01.01.2001</td>
                                                <td>19:00 CET</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Back to the Future</th>
                                                <td>23.04.2586</td>
                                                <td>19:00 CET</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">UPSI</th>
                                                <td>0.0.0</td>
                                                <td>00:00 CET</td>
                                                <td>Yes</td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}



export default Tournaments;
