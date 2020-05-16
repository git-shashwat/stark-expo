import PropTypes from "prop-types";
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButtonComponent from '../custom-button/custom-button.component';
import { startUserSignin } from '../../redux/actions/auth';

const SigninComponent = ({
    startLogin
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

        startLogin(email, password);
        setLoginCredentials({
            email: '',
            password: ''
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

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
  startLogin: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startUserSignin(email, password))
});

export default connect(undefined, mapDispatchToProps)(SigninComponent);