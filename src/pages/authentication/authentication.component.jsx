import React from 'react';

import SignInComponent from '../../components/sign-in/sign-in.component';

import './authentication.styles.scss';

export default () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignInComponent />
        </div>
    );
}