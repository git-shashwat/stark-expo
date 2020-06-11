import PropTypes from "prop-types";
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { startSignIn } from '../../redux/actions/auth';
import { createStructuredSelector } from "reselect";
import { selectAuthError } from "../../redux/selectors/auth";
import { Alert } from "reactstrap";

const SigninComponent = ({
    startSignIn,
    signInError
}) => {
    const [loginCredentials, setLoginCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setLoginCredentials({
            ...loginCredentials,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = loginCredentials;

        startSignIn(email, password);
        setLoginCredentials({
            email: '',
            password: ''
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            {!!signInError && <Alert color="danger">Sign In Failed</Alert>}

            <form onSubmit={handleSubmit}>
                <FormInput
                 name="email"
                 type="email" 
                 label="Email"
                 value={loginCredentials.email} 
                 handleChange={handleChange}
                 required 
                />
                <FormInput
                 name="password" 
                 type="password" 
                 label="Password"
                 value={loginCredentials.password} 
                 handleChange={handleChange}
                 required
                />
                <CustomButtonComponent type="submit"> Sign in </CustomButtonComponent>
            </form>
        </div>
    );
}

SigninComponent.propTypes = {
  startSignIn: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    signInError: selectAuthError
});

const mapDispatchToProps = (dispatch) => ({
    startSignIn: (email, password) => dispatch(startSignIn({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninComponent);