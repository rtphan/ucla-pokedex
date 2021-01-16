import React from 'react';
import Login from '../components/login-button.component';

export default function Landing(props) {
    return (
        <div>
            <h1>Welcome to the Pokedex Project</h1>
            <Login signIn={props.signIn} />
        </div>
    );
}