import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { connect } from 'react-redux';
import { startUserSignup } from '../../redux/actions/auth';

const SignUp = ({
    startSignup
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

const mapDispatchToProps = (dispatch) => ({
    startSignup: (creds) => dispatch(startUserSignup(creds)) 
});

export default connect(undefined, mapDispatchToProps)(SignUp);