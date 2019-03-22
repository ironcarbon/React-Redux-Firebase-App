import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {

        if (this.props.auth.uid) return <Redirect to="/" />

        return (
            <div className="signin-container">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="sign-title">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn-dark">Login</button>
                    </div>
                    <div>
                        {this.props.authError ? <p>{this.props.authError}</p> : null}
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, { signIn })(SignIn);