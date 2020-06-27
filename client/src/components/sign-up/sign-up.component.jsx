import PropTypes from "prop-types";
import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { startSignUp } from '../../redux/actions/auth';
import { selectAuthError } from "../../redux/selectors/auth";
import { Alert } from "reactstrap";

const SignUp = ({
    startSignup,
    signUpError
}) => {
    const [signupState, setSignupState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = signupState;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        startSignup({
            email,
            password,
            displayName
        });
        setSignupState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setSignupState({
            ...signupState,
            [name]: value
        })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            {!!signUpError && <Alert color="danger">Sign Up Failed</Alert>}
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={signupState.displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={signupState.email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={signupState.password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={signupState.confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

SignUp.propTypes = {
  startSignup: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
    signUpError: selectAuthError
});

const mapDispatchToProps = dispatch => ({
    startSignup: (creds) => dispatch(startSignUp(creds)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);