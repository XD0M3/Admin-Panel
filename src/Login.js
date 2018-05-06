import React, { Component } from 'react';
import logo from './logo.png'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = props.login;
    }

    email = "";
    password = "";

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-190 p-b-30">
                        <form className="login100-form validate-form" action="javascript:void(0);">
                            <div className="login100-form-avatar">
                                <img src={logo} alt="AVATAR"></img>
					        </div>

                                <span className="login100-form-title p-t-20 p-b-45">
                                    ESL
					            </span>

                                <div className="wrap-input100 validate-input m-b-10" data-validate="Username is required">
                                <input className="input100" type="text" name="username" placeholder="Username" onChange={(evt) => this.email = evt.target.value}/>
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="fa fa-user"></i>
                                        </span>
					             </div>

                                    <div className="wrap-input100 validate-input m-b-10" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Password" onChange={(evt) => this.password = evt.target.value} />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fa fa-lock"></i>
                                            </span>
					                   </div>

                            <div className="container-login100-form-btn p-t-10">
                                <button className="login100-form-btn" onClick={() => this.login(this.email, this.password)}>
                                                Login
						                    </button>
                                        </div>
				                    </form>
                                </div>
                            </div>
	                    </div>

        );
    }
}



export default Login;