import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            usernname: '',
            password: '',
        };
    }

    signin = () => {
        this.props.signinUser(this.state, this.props.history);
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPwChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onUserChange = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <div className="signinbox">
                <div id="emailsignin">
                    <h4>Enter Email</h4>
                    <input id="email" onChange={this.onEmailChange} value={this.state.email} placeholder="your email" />
                </div>
                <div id="usersignin">
                    <h4>Enter Username</h4>
                    <input id="user" onChange={this.onUserChange} value={this.state.username} placeholder="your username" />
                </div>
                <div id="pwsignin">
                    <h4>Enter Password</h4>
                    <input id="pw" onChange={this.onPwChange} value={this.state.password} placeholder="your password" />
                </div>
                <button className="signinbtn" type="button" onClick={this.signin}>Sign In</button>
            </div>
        );
    }
}

export default connect(null, { signinUser })(SignIn);
