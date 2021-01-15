import React from 'react';
import Login from '../components/login-button.component';

export default function Landing(props) {
    return (
        <div>
            <h1>This is the Landing Page!</h1>
            <Login signIn={props.signIn} />
        </div>
    );
}