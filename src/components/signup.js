import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
        };
    }

    signup = () => {
        this.props.signupUser(this.state, this.props.history);
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onUserChange = (event) => {
        this.setState({ username: event.target.value });
    }

    onPwChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <div id="emailsignup">
                    <h4>Enter Email</h4>
                    <input id="email" onChange={this.onEmailChange} value={this.state.email} placeholder="your email" />
                </div>
                <div id="usersignup">
                    <h4>Enter Username</h4>
                    <input id="username" onChange={this.onUserChange} value={this.state.username} placeholder="your username" />
                </div>
                <div id="pwsignup">
                    <h4>Enter Password</h4>
                    <input id="pw" onChange={this.onPwChange} value={this.state.password} placeholder="your password" />
                </div>
                <button className="signupbtn" type="button" onClick={this.signup}>Sign Up</button>
            </div>
        );
    }
}
export default connect(null, { signupUser })(SignUp);
