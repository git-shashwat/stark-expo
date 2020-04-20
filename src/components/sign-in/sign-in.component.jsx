import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButtonComponent from '../custom-button/custom-button.component';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
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
                 value={email} 
                 handleChange={handleChange}
                 required 
                />
                <FormInput
                 name="password" 
                 type="password" 
                 label="Password"
                 value={password} 
                 handleChange={handleChange}
                 required
                />
                <CustomButtonComponent type="submit"> Sign in </CustomButtonComponent>
            </form>
        </div>
    );
}